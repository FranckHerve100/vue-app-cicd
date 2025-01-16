import puppeteer from 'puppeteer'; // Import de Puppeteer
import fs from 'fs'; // Import du module fs pour lire les fichiers

async function generatePDF() {
  // Lance Puppeteer
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Charge le rapport HTML généré (à ajuster avec votre propre chemin)
  const reportPath = './reports/test-report.html';  // Chemin vers votre rapport HTML
  const content = fs.readFileSync(reportPath, 'utf-8'); // Lecture du fichier HTML
  await page.setContent(content);

  // Génère le PDF à partir du contenu HTML
  const pdfPath = './reports/test-report.pdf'; // Destination du fichier PDF
  await page.pdf({ path: pdfPath, format: 'A4' });

  console.log('Le PDF a été généré avec succès à l\'emplacement :', pdfPath);

  await browser.close();
}

generatePDF().catch(console.error);
