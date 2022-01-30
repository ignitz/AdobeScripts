if (app.name.indexOf ("Illustrator", 0) != -1) {
    // Illustrator code
    // Place script in 'Startup Scripts' directory inside Illustrator's installation directory:
    // http://www.adobe.com/devnet/illustrator/scripting.html => page 11
    // e.g. C:\Program Files\Adobe\Adobe Illustrator CC 2014\Support Files
    if (app.version == "18.1.1") {
        app.preferences.setBooleanPreference("Hello/DontShowAgainPrefKey_Ver18_1_1", true);
    } else {
        app.preferences.setBooleanPreference("Hello/DontShowAgainPrefKey_Ver18_1", true);
    }   
} else if (app.name.indexOf ("Photoshop", 0) != -1) {
     // Photoshop code
     // Place script in 'Startup Scripts CC' directory inside Photoshop's common installation directory.
     // http://wwwimages.adobe.com/content/dam/Adobe/en/devnet/photoshop/pdfs/photoshop_scripting_guide.pdf
     // e.g. C:\Program Files (x86)\Common Files\Adobe\Startup Scripts CC\Adobe Photoshop
    //SetDontShowAgain("true");
    var desc = new ActionDescriptor();
    desc.putBoolean( stringIDToTypeID( "show" ),  false );
    app.putCustomOptions( "0685b2e9-19db-4679-90b9-34644fcc7884", desc, true );
} else if (app.name.indexOf ("InDesign", 0) != -1) {
    // InDesign code
    // place script inside inDesign's Scripts/startup scripts directory within the installation directory
    // e.g. C:\Program Files\Adobe\Adobe InDesign CC 2014\Scripts\startup scripts
    app.generalPreferences.showWhatsNewOnStartup = false;
}