var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articleone={
    title:'Article one',
    heading:'Article one',
    date:'sep5,2016',
    content:`<p>Article oneArticle oneArticle oneArticle oneArticle oneArticle oneArticle oneArticle oneArticle oneArticle               oneArticle oneArticle oneArticle oneArticle oneArticle oneArticle oneArticle oneArticle oneArticle oneArticle            oneArticle oneArticle oneArticle oneArticle oneArticle oneArticle oneArticle one
                </p>
                <p>Article oneArticle oneArticle oneArticle oneArticle oneArticle oneArticle oneArticle oneArticle oneArticle oneArticle oneArticle oneArticle oneArticle oneArticle oneArticle oneArticle oneArticle oneArticle oneArticle oneArticle oneArticle oneArticle oneArticle oneArticle oneArticle oneArticle one
                </p>
                <p>Article oneArticle oneArticle oneArticle oneArticle oneArticle oneArticle oneArticle oneArticle oneArticle oneArticle oneArticle oneArticle oneArticle oneArticle oneArticle oneArticle oneArticle oneArticle oneArticle oneArticle oneArticle oneArticle oneArticle oneArticle oneArticle oneArticle one
                </p>`
};
function createTemplate(data){
    var title= data.title;
    var heading = data.heading;
    var date=data.date;
    var content=data.content;
    var template=`
    <html>
        <head>
            <title>$[title]</title>
            <link rel="stylesheet" href="ui/style.css">
            <style>
              /*.container{
                 max-width:800px;
                  margin:0 auto;
                  color:grey;
                  font-family:sans-serif;
                  padding-top: 50px;
                  padding-left: 20px;
                  padding-right: 20px;
              }*/
                
            </style>
        </head>
        <body>
            <div class="container">
                <div>
                    <a href="/">Home</a>
                    <hr/>
                </div>
                <div>
                    <h3>$[heading]</h3>
                </div>
                <div>
                 $[date]
                </div>
                <div>
                    $[content]
                </div>
            </div>
        </body>
        
        
        
    `;
    return template;
}


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/article-one',function(req,res){
    res.send(createTemplate(articleone));
}
);
app.get('/article-two',function(req,res){
   res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});
app.get('/article-three',function(req,res){
   res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
