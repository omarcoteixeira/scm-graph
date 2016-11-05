var git = require("nodegit");
var repo = require("path").resolve("repo");

var self = this;

var saveFile = function () {
  //TODO: Save json file
  console.log('done');
};

var getRepositoryReference = function(repo) {
  return repo.getReferences(git.Reference.TYPE.LISTALL);
};

var getBranchDetail = function (references) {
  for (ref of references) {
    if (ref.isTag()) {
      //TODO: Work with tags
    } else {
      //TODO: Work with branches
    }
  }
};

var fetch = function(repo) {
  return new Promise((resolve, reject) => {
      console.log("Fetching data ...");
      repo.fetch("origin", {
        callbacks: {
          credentials: function(url, userName) {
            return git.Cred.sshKeyFromAgent(userName);
          }
        }
      }).then(function () {
        self.repo = repo;
        resolve(repo);
      }, function (err) {
        console.error(err);
        reject(err);
      });
  });
}

git.Repository.open(repo)
  .then(fetch)
  .then(getRepositoryReference)
  .then(getBranchDetail)
  .done(saveFile);