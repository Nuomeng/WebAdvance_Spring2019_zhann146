var database;
function setup() {
  var config = {
  apiKey: "AIzaSyCdb-FfO7Ob588uw39WzRF4g_5VqRAITQk",
  authDomain: "ms1final-5a0aa.firebaseapp.com",
  databaseURL: "https://ms1final-5a0aa.firebaseio.com",
  projectId: "ms1final-5a0aa",
  storageBucket: "ms1final-5a0aa.appspot.com",
  messagingSenderId: "426395509849"
  };
  firebase.initializeApp(config);


  // Get a reference to the database service
  var database = firebase.database();
  var ref = database.ref("drawings");
  ref.on("value", gotAll, errData);
}

function gotAll(data) {
    var drawings = data.val();
    // Grab all the keys to iterate over the object
    var keys = Object.keys(drawings);
    // Loop through array

    for (var i = 0; i < keys.length; i++) {
      // The data for each record is in a property attributes
      // But here I'm just making a list with "id"
      var key = keys[i];
      console.log(key);
      var li = createElement('li', key);
      li.parent('drawinglist');


    }
  }

  function errData(error) {
    console.log("Something went wrong.");
    console.log(error);
  }
