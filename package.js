Package.describe({
    name: "natestrauser:bootstrap-colorpicker",
    summary: "Bootstrap Colorpicker packaged for meteor",
  version: "0.1.1",
  git: "https://github.com/nate-strauser/meteor-bootstrap-colorpicker.git"
});

Package.on_use(function (api) {
  api.versionsFrom("METEOR@0.9.0");
    api.add_files([
        "lib/bootstrap-colorpicker/js/bootstrap-colorpicker.js",
        "lib/bootstrap-colorpicker/css/bootstrap-colorpicker.css",
        "lib/bootstrap-colorpicker/img/bootstrap-colorpicker/alpha.png",
        "lib/bootstrap-colorpicker/img/bootstrap-colorpicker/hue.png",
        "lib/bootstrap-colorpicker/img/bootstrap-colorpicker/saturation.png"
    ], "client");

    api.add_files('path-override.css', 'client');
});
