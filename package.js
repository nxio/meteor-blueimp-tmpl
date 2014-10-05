Package.describe({
  summary: "Meteor wrapper for blueimp-tmpl Javascript templating engine.",
  version: "2.5.4", // = Javascript-Templates version
  git: "https://github.com/nxio/meteor-blueimp-tmpl.git"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.3.1');
  api.use(['jquery'], 'client');
  api.addFiles(['tmpl.js'], 'client');
});

