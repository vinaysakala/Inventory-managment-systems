// const PDFDocument = require('pdfkit');
// const fs = require('fs');

// // Sample data for the table
// const data = [
//     { id: 1, name: 'John', salary: 2000 },
//     { id: 2, name: 'Jane', salary: 2500 }
// ];

// // Create a new PDF document
// const doc = new PDFDocument();

// // Pipe the PDF content to a file
// const filename = 'sample.pdf';
// doc.pipe(fs.createWriteStream(filename));

// // Set up table parameters
// const startX = 50;
// const startY = 50;
// const rowHeight = 30;
// const colWidth = 150;

// // Set up table header
// const tableHeader = ['ID', 'Name', 'Salary'];

// // Header row
// doc.font('Helvetica-Bold').fontSize(12);
// tableHeader.forEach((header, index) => {
//     const x = startX + index * colWidth + colWidth / 2 - doc.widthOfString(header) / 2;
//     doc.text(header, x, startY);
// });

// // Draw horizontal lines
// doc.moveTo(startX, startY + rowHeight)
//     .lineTo(startX + 3 * colWidth, startY + rowHeight)
//     .lineWidth(1)
//     .stroke();

// // Draw vertical lines
// for (let i = 0; i <= tableHeader.length; i++) {
//     doc.moveTo(startX + i * colWidth, startY)
//         .lineTo(startX + i * colWidth, startY + 2 * rowHeight)
//         .lineWidth(1)
//         .stroke();
// }

// // Populate data
// doc.font('Helvetica').fontSize(10);
// data.forEach((entry, rowIndex) => {
//     Object.keys(entry).forEach((key, colIndex) => {
//         const value = entry[key].toString();
//         const x = startX + colIndex * colWidth + colWidth / 2 - doc.widthOfString(value) / 2;
//         const y = startY + (rowIndex + 1) * rowHeight + rowHeight / 2 - doc.currentLineHeight() / 2;
//         doc.text(value, x, y);
//     });
// });

// // Finalize PDF
// doc.end();

// console.log('PDF generated successfully:', filename);

// const PDFDocument = require('pdfkit');
// const fs = require('fs');

// const aaa1 = {
//     companyName: 'Suvarna',
//     id: 272,
//     salary: '2k',
//     place:'Nellore',
//     DOb:'25-july-1996'
// };

// // Create a new PDFDocument
// const doc = new PDFDocument();

// // Pipe the PDF content to a file
// doc.pipe(fs.createWriteStream('sample.pdf'));

// // Set up table parameters
// const startX = 50;
// const startY = 50;
// const rowHeight = 30;
// const colWidth = 150;
// const borderWidth = 1;

// // Add content to the PDF
// doc.font('Helvetica').fontSize(12);

// // Populate data
// const keys = Object.keys(aaa1);
// const values = Object.values(aaa1);
// const numCols = 3; // Number of columns for each row
// const numRows = Math.ceil(keys.length / numCols); // Calculate number of rows

// for (let row = 0; row < numRows; row++) {
//     for (let col = 0; col < numCols; col++) {
//         const index = row * numCols + col;
//         if (index < keys.length) {
//             const x = startX + col * colWidth;
//             const y = startY + row * rowHeight;
//             doc.text(`${keys[index]}: ${values[index]}`, x, y, { width: colWidth, align: 'left' });
//         }
//     }
// }

// // Finalize PDF
// doc.end();

// console.log('PDF generated successfully.');

// const PDFDocument = require('pdfkit');
// const fs = require('fs');

// // Sample data for the table
// const data = [
//     { id: 1, name: 'John Doe', age: 30 },
//     { id: 2, name: 'Jane Smith', age: 25 },
//     { id: 3, name: 'Alice Johnson', age: 35 }
// ];

// // Create a new PDFDocument
// const doc = new PDFDocument();

// // Pipe the PDF content to a file
// doc.pipe(fs.createWriteStream('sample.pdf'));

// // Set up table parameters
// const startX = 50;
// const startY = 50;
// const rowHeight = 30;
// const colWidth = 150;
// const borderWidth = 1;

// // Header row for the table
// doc.font('Helvetica-Bold').fontSize(12);
// doc.text('ID', startX, startY).text('Name', startX + colWidth, startY).text('Age', startX + 2 * colWidth, startY);

// // Draw horizontal lines for the table
// for (let i = 0; i <= data.length; i++) {
//     doc.moveTo(startX, startY + i * rowHeight)
//         .lineTo(startX + 3 * colWidth, startY + i * rowHeight)
//         .lineWidth(borderWidth)
//         .stroke();
// }

// // Draw vertical lines for the table
// doc.moveTo(startX + colWidth, startY).lineTo(startX + colWidth, startY + data.length * rowHeight).stroke();
// doc.moveTo(startX + 2 * colWidth, startY).lineTo(startX + 2 * colWidth, startY + data.length * rowHeight).stroke();

// // Populate data into the table
// doc.font('Helvetica').fontSize(10);
// data.forEach((entry, index) => {
//     const rowY = startY + (index + 1) * rowHeight;
//     const idX = startX + colWidth / 2 - doc.widthOfString(entry.id.toString()) / 2;
//     const nameX = startX + colWidth + colWidth / 2 - doc.widthOfString(entry.name) / 2;
//     const ageX = startX + 2 * colWidth + colWidth / 2 - doc.widthOfString(entry.age.toString()) / 2;
//     doc.text(entry.id.toString(), idX, rowY, { align: 'center' })
//         .text(entry.name, nameX, rowY, { align: 'center' })
//         .text(entry.age.toString(), ageX, rowY, { align: 'center' });
// });

// // Add a blank space after the table
// doc.moveDown();

// // Sample data for the `aaa1` object
// const aaa1 = {
//     companyName: 'Suvarna',
//     id: 272,
//     salary: '2k',
//     place: 'Nellore',
//     DOb: '25-july-1996'
// };

// // Display the 'companyName', 'id', and 'salary' properties in one row
// const objproperties1 = ['companyName', 'id', 'salary','place','DOb'];
// const lineHeight1 = 15;
// const spacing1 = 10;
// objproperties1.forEach((property, index) => {
//     const x = startX + (colWidth + 50) * index;
//     const y = doc.y + spacing1; // Below the previous line
//     doc.fontSize(12)
//         .text(`${property}: ${aaa1[property]}`, x, y, { align: 'left' });
// });


// // Finalize PDF
// doc.end();

// console.log('PDF generated successfully.');


const PDFDocument = require('pdfkit');
const fs = require('fs');

// Import the Table constructor
const { Table } = require('pdfkit-table/src/Table');

// Create a new PDF document
const doc = new PDFDocument;

// Pipe the document to a file
doc.pipe(fs.createWriteStream('invoice.pdf'));

// Add content to the document
doc.fontSize(12)
   .text('Invoice', { align: 'center' })
   .moveDown()
   .text('From: Omni Kukatpally Hospital', { align: 'center' })
   .text('To: Nanatpany Hospital', { align: 'center' })
   .moveDown()
   .text('Date: 02-jan-24')

const table = new Table({
  headerRows: 1,
  width: 500,
  alignment: 'center',
  colWidths: [70, 30, 30, 30],
  fontSize: 12,
});

table.text('Item Name', { col: 0, row: 0, underline: true, alignment: 'left' });
table.text('MFR QTY', { col: 1, row: 0, underline: true, alignment: 'right' });
table.text('MRP', { col: 2, row: 0, underline: true, alignment: 'right' });
table.text('Amount (Rs)', { col: 3, row: 0, underline: true, alignment: 'right' });

table.fontSize(12);
table.text('DOLOFAN INJ', { col: 0, row: 1, alignment: 'left' });
table.text('1', { col: 1, row: 1, alignment: 'right' });
table.text('12.00', { col: 2, row: 1, alignment: 'right' });
table.text('12.00', { col: 3, row: 1, alignment: 'right' });

table.text('DOLOPAR TAB', { col: 0, row: 2, alignment: 'left' });
table.text('1', { col: 1, row: 2, alignment: 'right' });
table.text('12.00', { col: 2, row: 2, alignment: 'right' });
table.text('12.32', { col: 3, row: 2, alignment: 'right' });

doc.table(table.render(), { padding: 10 });


doc.end();

