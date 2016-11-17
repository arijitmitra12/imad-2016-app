var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articles = {
 'article-one' :{
    title :"my heading " ,
    heading: 'article-one',
    date: 'sep5,2016',
    content: `
             <p>
                this is   my   first  paragraph
                 </p>
              <p>
                this is   my   first  paragraph
            </p>`
    },
 'article-two': {
       title :"my heading " ,
    heading: 'article-two',
    date: 'sep5,2016',
    content: `
             <p>
                this is   my   2nd  paragraph
                 </p>
              <p>
                this is   my   first  paragraph
            </p>`
 },
 'article-three': {
       title :"my heading " ,
    heading: 'article-three',
    date: 'sep5,2016',
    content: `
             <p>
                this is   my   three  paragraph
                 </p>
              <p>
                this is   my   first  paragraph
            </p>`
 }
};
    
    
 function createtemplate(data)   {
     var title= data.title;
     var date= data.date;
     var content=data.content;
     var heading= data.heading;
 var htmltemplate=` 
 <html>
 <head>
     <title>
          ${title}
     </title>
     <style>
          <link href="/ui/style.css" rel="stylesheet" />
     </style>
 </head>   
    <body>
        <div class="container">
           <div>
            <a href='/'>home</a>
        </div>
        <hr/>
        <h1> ${heading}</h1>
        <div>  ${date}</div>
        <div>
           ${content}
            
            </div>
        </div>
    </body>
    
    
</html>`
      ;  
      return htmltemplate;
 }

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName', function(req,res){
    var articleName=req.params.articleName;
    res.send(createtemplate(articles[articleName]));
}
);



app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
