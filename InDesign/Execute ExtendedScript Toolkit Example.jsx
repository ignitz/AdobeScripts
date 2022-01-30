/*
2016 Yuri Niitsuma
Open Indesign with Extednded Toolkit CC
*/

// Example to use Indesign with Extended Toolkit CC

#target indesign // Default InDesign
// #target indesign11 // InDesign 2015

// Open Indesign
indesign.activate();

// Open a new File
indesign.openAsNew();

// Close InDesign
indesign.quit();

/*
 Example to open a file with InDesign
 */

// #target indesign // Default InDesign
// #target indesign // InDesign 2015

// Open Indesign
indesign11.activate();

// setTimeout('', 3000);
// Open a new File
// indesign11.openAsNew();

indesign11.open(File('~/test.indd'));

// Close InDesign
// indesign.quit();