import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import passport from "passport";
import { Strategy } from "passport-local";
import session from "express-session";
import env from "dotenv";
import axios from "axios";
import flash from "connect-flash";
import multer from "multer";
import path from "path";
import { fileURLToPath } from 'url';
import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import fs from "fs";
import trainingProgram from './trainingProgram.js';

const app = express();
const port = 3000;
const API_URL = "http://localhost:4000";
env.config();
let questions = [], user, resources;
const upload = multer({ dest: 'uploads/' });

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24,
    },
  })
);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  req.session.returnTo = req.originalUrl;
  res.redirect('/login');
}

const db = new pg.Client({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT,
});
db.connect();

app.set('view engine', 'ejs');

app.get("/", (req, res) => {
  if (req.isAuthenticated())
    res.render('main', { user });
  else
    res.render('home');
});

app.get("/login", (req, res) => {
  res.render('login', { message: req.flash() });
});

// Function to convert URL-friendly strings back to the title format
function urlToTitleCase(urlStr) {
  const specialCases = {
    'she': 'SHE',
    'hr': 'HR',
    'sap': 'SAP',
    'ms': 'MS',
    'cctv': 'CCTV',
    'loto': 'LOTO',
    'chp': 'CHP',
    'acc': 'ACC',
    'rmhs': 'RMHS',
    'ahp': 'AHP',
    'wtp': 'WTP',
    'posh': 'POSH',
    'tpm': 'TPM',
    'kk': 'KK',
    'jh': 'JH',
    'pm': 'PM',
    'qm': 'QM',
    'otpm': 'OTPM',
    'dm': 'DM',
    'efqm': 'EFQM',
    '5s': '5S',
    'esp': 'ESP',
    '2d': '2D',
    '3d': '3D',
    'erp': 'ERP',
    'hazop': 'HAZOP',
    'eni': 'ENI',
    'fad': 'FAD',
    'pp': 'PP',
    'eot': 'EOT',
    'mdhs': 'MDHS',
    'pcm': 'PCM',
    'sg': 'SG',
    'pug': 'PUG',
    'id': 'ID',
    'vfd': 'VFD',
    'plc': 'PLC',
  };

  return urlStr
    .split(/[\s-]+/) // Split by spaces or hyphens
    .map(word => {
      const lowercaseWord = word.toLowerCase();
      return specialCases[lowercaseWord] || (word.charAt(0).toUpperCase() + lowercaseWord.slice(1));
    })
    .join(' '); // Join words back with spaces
}

// Function to find a main topic by its URL
function findMainTopicByHref(href) {
  const normalizedTitle = urlToTitleCase(href);
  return trainingProgram[normalizedTitle] ? normalizedTitle : null;
}

// Function to find a subtopic by its URL
function findSubTopicByHref(mainTopic, href) {
  const subtopics = trainingProgram[mainTopic];
  const normalizedTitle = urlToTitleCase(href);
  return subtopics[normalizedTitle] ? normalizedTitle : null;
}

// Function to find a further subtopic by its URL
function findFurtherSubtopicByHref(mainTopic, subTopic, href) {
  const furtherSubtopic = trainingProgram[mainTopic][subTopic];
  const normalizedTitle = urlToTitleCase(href);
  return furtherSubtopic && furtherSubtopic[normalizedTitle] ? normalizedTitle : null;
}

// Route for main topics
app.get('/main/:mainTopic', ensureAuthenticated, (req, res) => {
  const mainTopicHref = req.params.mainTopic;
  const mainTopic = findMainTopicByHref(mainTopicHref);

  if (mainTopic) {
    const subtopics = trainingProgram[mainTopic];

    if (subtopics) {
      const subtopicArray = Object.keys(subtopics)
        .filter(subtopicName => subtopics[subtopicName].href)
        .map(subtopicName => ({
          name: subtopicName,
          color: subtopics[subtopicName].color,
          href: subtopics[subtopicName].href,
          description: subtopics[subtopicName].description
        }));
        
      if (subtopicArray.length > 0) {
        res.render('topics', { topics: subtopicArray, user, title: mainTopic });
      } else {
        const resources = trainingProgram[mainTopic].resources || [];
        res.render('resources', { resources, user, topic: mainTopic, url: mainTopicHref });
      }
    } else {
      const resources = trainingProgram[mainTopic].resources || [];
      res.render('resources', { resources, user, topic: mainTopic, url: mainTopicHref });
    }
  } else {
    res.status(404).send('Main topic not found');
  }
});

// Route for subtopics
app.get('/main/:mainTopic/:subTopic', ensureAuthenticated, (req, res) => {
  const mainTopicHref = req.params.mainTopic;
  const subTopicHref = req.params.subTopic;

  const mainTopic = findMainTopicByHref(mainTopicHref);
  if (mainTopic) {
    const subTopic = findSubTopicByHref(mainTopic, subTopicHref);

    if (subTopic) {
      const furtherSubtopics = trainingProgram[mainTopic][subTopic];

      if (furtherSubtopics) {
        const furtherSubtopicArray = Object.keys(furtherSubtopics)
          .filter(furtherSub => furtherSubtopics[furtherSub].href)
          .map(furtherSubtopicName => ({
            name: furtherSubtopicName,
            color: furtherSubtopics[furtherSubtopicName].color,
            href: furtherSubtopics[furtherSubtopicName].href,
            description: furtherSubtopics[furtherSubtopicName].description
          }));

        if (furtherSubtopicArray.length > 0) {
          res.render('topics', { topics: furtherSubtopicArray, user, title: subTopic });
        } else {
          const resources = trainingProgram[mainTopic][subTopic].resources || [];
          res.render('resources', { resources, user, topic: subTopic, url: subTopicHref });
        }
      } else {
        const resources = trainingProgram[mainTopic][subTopic].resources || [];
        res.render('resources', { resources, user, topic: subTopic, url: subTopicHref });
      }
    } else {
      res.status(404).send('Subtopic not found');
    }
  } else {
    res.status(404).send('Main topic not found');
  }
});

// Route for further subtopics
app.get('/main/:mainTopic/:subTopic/:furtherSubtopic', ensureAuthenticated, (req, res) => {
  const mainTopicHref = req.params.mainTopic;
  const subTopicHref = req.params.subTopic;
  const furtherSubtopicHref = req.params.furtherSubtopic;

  const mainTopic = findMainTopicByHref(mainTopicHref);
  if (mainTopic) {
    const subTopic = findSubTopicByHref(mainTopic, subTopicHref);
    if (subTopic) {
      const furtherSubtopic = findFurtherSubtopicByHref(mainTopic, subTopic, furtherSubtopicHref);
      if (furtherSubtopic) {
        resources = trainingProgram[mainTopic][subTopic][furtherSubtopic].resources || [];
        res.render('resources', { resources, user, topic: furtherSubtopic, url: furtherSubtopicHref });
      } else {
        res.status(404).send('Further subtopic not found');
      }
    } else {
      res.status(404).send('Subtopic not found');
    }
  } else {
    res.status(404).send('Main topic not found');
  }
});

app.get("/logout", (req, res) => {
  req.logout(function (err) {
    if (err)
      return next(err);
    res.redirect("/");
  });
});

app.get("/main", ensureAuthenticated, (req, res) => {
  res.render('main', { user });
});

app.get("/quiz/:course/:level", ensureAuthenticated, async (req, res) => {
  const course = req.params.course;
  const level = req.params.level;
  try {
    const response = await axios.get(`${API_URL}/posts/${course}/${level}`);
    questions = response.data;
    res.render('quiz', { posts: response.data, user, title: urlToTitleCase(course), level, course });
  } catch (error) {
    res.status(500).json({ message: "Error fetching questions" });
  }
});

app.post('/submit/:course/:level', (req, res) => {
  const course = req.params.course;
  const level = req.params.level;
  const userAnswers = req.body;
  let score = 0;
  questions.forEach((q, index) => {
    if (userAnswers[`q${index}`] === q.answer)
      score++;
  });
  res.render('score', { score, user, course, level });
});

app.get('/certificate/:course/:level', ensureAuthenticated, async (req, res) => {
  const course = req.params.course;
  const level = req.params.level;
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const date = new Date();

  try {
    // Load the certificate template
    const existingPdfBytes = fs.readFileSync(path.join(__dirname, 'e-learning certificate.pdf')); 

    // Create a new PDF document
    const pdfDoc = await PDFDocument.load(existingPdfBytes);

    // Embed the font
    const font = await pdfDoc.embedFont(StandardFonts.TimesRomanItalic);

    // Get the first page of the document
    const page = pdfDoc.getPage(0);

    // Add user-specific data to the PDF
    page.drawText(user.name, { x: 98, y: 260, size: 45, font, color: rgb(0, 0, 0) });
    page.drawText(urlToTitleCase(course), { x: 205, y: 161, size: 36, font, color: rgb(0, 0, 0) });
    page.drawText(level.charAt(0).toUpperCase() + level.slice(1), { x: 205, y: 118, size: 36, font, color: rgb(0, 0, 0) });
    page.drawText(`${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`, { x: 142, y: 54, size: 16, font, color: rgb(0, 0, 0) });

    // Serialize the PDF document to bytes
    const pdfBytes = await pdfDoc.save();

    // Set response headers to prompt download without saving on server
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename="${course}_${level}_certificate.pdf"`);

    // Send the PDF as a Buffer to ensure correct binary data is sent
    res.end(Buffer.from(pdfBytes));
  } catch (error) {
    console.error("Error generating the certificate:", error);
    res.status(500).send("An error occurred while generating the certificate.");
  }
});

app.get('/profile', async (req, res) => {
  res.render('profile', { user });
});

app.get('/profile-photo/:id', async (req, res) => {
  const userId = req.params.id;
  try {
    const result = await db.query('SELECT profilephoto FROM users WHERE id = $1', [userId]);
    const imageBuffer = result.rows[0].profilephoto;
    res.setHeader('Content-Type', 'image/png');  
    res.send(imageBuffer);
  } catch (err) {
    console.error('Error fetching profile photo:', err);
    res.status(500).send('Server error');
  }
});

app.post('/profile/upload-photo', upload.single('profilePhoto'), async (req, res) => {
  try {
    const userId = req.user.id;
    const filePath = req.file.path;

    // Read the uploaded file as binary data
    const fileBuffer = fs.readFileSync(filePath);

    // Store binary data (image) in PostgreSQL
    await db.query('UPDATE users SET profilephoto = $1 WHERE id = $2', [fileBuffer, userId]);

    // Optionally delete the file from the temporary folder
    fs.unlinkSync(filePath);

    res.redirect('/profile');
  } catch (err) {
    console.error('Error uploading profile photo:', err);
    res.status(500).send('Server error');
  }
});

app.post('/login', passport.authenticate('local', {
  failureRedirect: '/login',
  failureFlash: true
}), (req, res) => {
  const redirectTo = req.session.returnTo || '/main';
  delete req.session.returnTo;
  res.redirect(redirectTo);
});

passport.use(
  new Strategy(async function verify(username, password, cb) {
    try {
      const result = await db.query("SELECT * FROM users WHERE employee_id = $1 ", [username]);
      if (result.rows.length > 0) {
        user = result.rows[0];
        if (password === user.password)
          return cb(null, user);
        else
          return cb(null, false, { message: 'Incorrect password' });
      } else
        return cb(null, false, { message: 'User not found' });
    } catch (err) {
      return cb(err);
    }
  })
);

passport.serializeUser((user, cb) => {
  cb(null, user);
});
passport.deserializeUser((user, cb) => {
  cb(null, user);
});

app.listen(port, () => {
  console.log(`Server running on port http://localhost:${port}`);
});

/* 
  profile photo bug + profile header bug
  quiz.ejs css
  home.ejs css
  footer not yet done
  quiz marks database(later)
  user creds database upload
  after pass user cannot access quiz
  quiz cannot load again and again redirect to home
  display courses in profile page
  navbar dropdown update
  acess security? certificate href can only be accessed if database shows that user is passed
*/
