const fs = require('fs');
const path = require('path');

function checkNodeModules() {
  const unwantedFolders = ["folder1", "folder2", "folder3"]; // list unwanted folders here
  const nodeModulesPath = path.join(__dirname, '/node_modules');
  const folders = fs.readdirSync(nodeModulesPath);
  const unwantedFoldersInNodeModules = folders.filter(folder => unwantedFolders.includes(folder));

  if (unwantedFoldersInNodeModules.length > 0) {
    console.log("Unwanted folders found in 'node_modules':", unwantedFoldersInNodeModules);
    unwantedFoldersInNodeModules.forEach(folder => {
      const folderPath = path.join(nodeModulesPath, '/', folder);
      fs.rmdirSync(folderPath, {recursive: true}); // delete folder and all of its content
      console.log(`Folder '${folder}' deleted`);
    });
  } else {
    console.log("No unwanted folders found in 'node_modules'");
  }
}

checkNodeModules();
