//   if (BlogId === "") {
//     return new Promise((resolve, reject) => {
//       const selectQuery = "SELECT * FROM blogs";
//       connection.query(selectQuery, (err, results) => {
//         if (err) {
//           console.error("Error reading data: " + err.stack);
//           reject(err);
//           return;
//         }

//         console.log("Retrieved data:");
//         resolve(results);
//       });
//     });
//   } else {
//     return new Promise((resolve, reject) => {
//       const selectQuery = "SELECT * FROM blogs WHERE BlogId = ?";
//       connection.query(selectQuery, [BlogId], (err, results) => {
//         if (err) {
//           console.error("Error fetching data:", err.stack);
//           reject(err);
//           return;
//         } else {
//           if (results.length === 0) {
//             console.error("Blog Not Found");
//             reject("Blog Not Found");
//             return;
//           } else {
//             console.log("Retrieved data:");
//             resolve(results);
//           }
//         }
//       });
//     });
//   }
// };


//   try {
//     const sq = "SELECT * FROM blogs";
//     const allBlogs = await read(req, res, sq);
//     res.send(allBlogs);
//   } catch (err) {
//     // Handle errors here, if necessary
//     console.error("Error retrieving data:", err);
//     res.status(500).send("Error retrieving data");
//   }



// app.post('/api/data',(req, res) =>{
//     req.body.id = crypto.randomUUID();
//     jsonData.blogs.push(req.body);
//     writeFileSync('./data/db.json', JSON.stringify(jsonData, undefined, 2));
//     res.send(jsonData);
// })