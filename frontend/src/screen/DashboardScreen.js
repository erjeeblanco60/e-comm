import React from 'react'

const DashboardScreen = () => {
    return (
        <div>
           <header id="masthead" class="site-header" data-anchor-target=".hero" data-top="background: rgba(255,255,255,0); padding: 30px 0; box-shadow: 0px 0px 20px 6px rgba(0, 0, 0, 0);" data-top-bottom="background: rgba(255,255,255,1); padding: 10px 0; box-shadow: 0px 0px 20px 6px rgba(0, 0, 0, 0.2);">
        <nav id="primary-navigation" class="site-navigation">
            <div class="container">
                <div class="navbar-header page-scroll">

                    <button type="button" class="navbar-toggle collapsed" data-target="#portfolio-perfect-collapse" aria-expanded="false" >
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    
                    <a href="#hero" class="site-logo"><img src="assets/img/logo.png" alt="logo"></a>
                    
                </div><!-- /.navbar-header -->

                <div class="main-menu" id="portfolio-perfect-collapse">

                    <ul class="nav navbar-nav navbar-right">

                        <li class="page-scroll"><a href="#hero">Home</a></li>
                        <li class="page-scroll"><a href="#about">About</a></li>
                        <li class="page-scroll"><a href="#service">Service</a></li>
                        <li class="page-scroll"><a href="#portfolio">Portfolio</a></li>
                        <li class="page-scroll"><a href="#contact">Contact</a></li>
                        
                    </ul><!-- /.navbar-nav -->

                </div><!-- /.navbar-collapse -->

            </div>
        </nav><!-- /.primary-navigation -->
    </header><!-- /#header -->

    <div id="hero" class="hero">
        <div class="container">
            <div class="row">

                <div class="col-md-6">
                    <h1>ERJEE B. CONCHAS</h1>
                    <div class="page-scroll">
                        <p class="job-title">AWS Certified || ITIL Certified <br> Back-end Developer</p>
                        <a href="#portfolio" class="btn btn-fill ">GO TO PORTFOLIO</a>
                        <div class="clearfix visible-xxs"></div>
                        <a href="#contact" class="btn btn-border">Contact</a>
                    </div>
                </div>
            
                <div class="col-md-6 text-right">
                
                </div>

            </div>
        </div>
    </div><!-- /.hero -->

    <main id="main" class="site-main">

        <section id="portfolio" class="site-section section-portfolio">
            <div class="container">
                <div class="text-center">
                    <h3>My recent Works</h3>
                    <img src="assets/img/lines.svg" class="img-lines" alt="lines">
                </div>
                <div class="row">
                    <div class="col-md-4 col-xs-6">
                        <div class="portfolio-item">
                            <img src="assets/img/portfolio-1.jpg" class="img-res" alt="">
                            <div class="portfolio-item-info">
                                <h4>Real Time API for Weather App</h4>
                                <a href="#" data-toggle="modal" data-target="#portfolioItem1"><span class="glyphicon glyphicon-eye-open"></span></a>
                                <a href="https://conchas-weather-apps.herokuapp.com/" target="_blank"><span class="glyphicon glyphicon-link"></span></a>
                            </div><!-- /.portfolio-item-info -->
                        </div><!-- /.portfolio-item -->
                    </div>
                    <div class="col-md-4 col-xs-6">
                        <div class="portfolio-item">
                            <img src="assets/img/portfolio-2.jpg" class="img-res" alt="">
                            <div class="portfolio-item-info">
                                <h4>Chat Application</h4>
                                <a href="#" data-toggle="modal" data-target="#portfolioItem2"><span class="glyphicon glyphicon-eye-open"></span></a>
                                <a href="https://conchas-chat-app.herokuapp.com/" target="_blank"><span class="glyphicon glyphicon-link"></span></a>
                            </div><!-- /.portfolio-item-info -->
                        </div><!-- /.portfolio-item -->
                    </div>
                    <div class="col-md-4 col-xs-6">
                        <div class="portfolio-item">
                            <img src="assets/img/portfolio-3.jpg" class="img-res" alt="">
                            <div class="portfolio-item-info">
                                <h4>Serverless Auction App</h4>
                                <a href="#" data-toggle="modal" data-target="#portfolioItem3"><span class="glyphicon glyphicon-eye-open"></span></a>
                                <a href="#" target="_blank"><span class="glyphicon glyphicon-link"></span></a>
                            </div><!-- /.portfolio-item-info -->
                        </div><!-- /.portfolio-item -->
                    </div>
                    <div class="col-md-4 col-xs-6">
                        <div class="portfolio-item">
                            <img src="assets/img/portfolio-4.jpg" class="img-res" alt="">
                            <div class="portfolio-item-info">
                                <h4>Ecommerce Platform</h4>
                                <a href="#" data-toggle="modal" data-target="#portfolioItem4"><span class="glyphicon glyphicon-eye-open"></span></a>
                                <a href="https://conchas-ecomm.herokuapp.com/" target="_blank"><span class="glyphicon glyphicon-link"></span></a>
                            </div><!-- /.portfolio-item-info -->
                        </div><!-- /.portfolio-item -->
                    </div>
                    <div class="col-md-4 col-xs-6">
                        <div class="portfolio-item">
                            <img src="assets/img/portfolio-5.jpg" class="img-res" alt="">
                            <div class="portfolio-item-info">
                                <h4>Social Media App</h4>
                                <a href="#" data-toggle="modal" data-target="#portfolioItem5"><span class="glyphicon glyphicon-eye-open"></span></a>
                                <a href="https://conchas-social-network.herokuapp.com/" target="_blank"><span class="glyphicon glyphicon-link"></span></a>
                            </div><!-- /.portfolio-item-info -->
                        </div><!-- /.portfolio-item -->
                    </div>
                    <div class="col-md-4 col-xs-6">
                        <div class="portfolio-item">
                            <img src="assets/img/portfolio-6.jpg" class="img-res" alt="">
                            <div class="portfolio-item-info">
                                <h4>RESTful API App</h4>
                                <a href="#" data-toggle="modal" data-target="#portfolioItem6"><span class="glyphicon glyphicon-eye-open"></span></a>
                                <a href="https://github.com/erjeeblanco60/tasksApp" target="_blank"><span class="glyphicon glyphicon-link"></span></a>
                            </div><!-- /.portfolio-item-info -->
                        </div><!-- /.portfolio-item -->
                    </div>
                </div>
            </div>
        </section><!-- /.secton-portfolio -->


        <section class="site-section section-skills">
            <div class="container">
                <div class="text-center">
                    <h3>My Skills</h3>
                    <img src="assets/img/lines.svg" class="img-lines" alt="lines">
                </div>
                <div class="row">
                    <div class="col-md-4">
                        <div class="skill">
                            <h4>AWS CLOUD SERVICES</h4>
                            <div class="progress">
                                <div class="progress-bar" role="progressbar" data-transitiongoal="90"></div><!-- /.progress-bar -->
                            </div><!-- /.progress -->
                        </div><!-- /.skill -->
                        <div class="skill">
                            <h4>REACT JS</h4>
                            <div class="progress">
                                <div class="progress-bar" role="progressbar" data-transitiongoal="80"></div><!-- /.progress-bar -->
                            </div><!-- /.progress -->
                        </div><!-- /.skill -->
                    </div>
                    <div class="col-md-4">
                        <div class="skill">
                            <h4>MongoDB</h4>
                            <div class="progress">
                                <div class="progress-bar" role="progressbar" data-transitiongoal="82"></div><!-- /.progress-bar -->
                            </div><!-- /.progress -->
                        </div><!-- /.skill -->
                        <div class="skill">
                            <h4>NODE JS</h4>
                            <div class="progress">
                                <div class="progress-bar" role="progressbar" data-transitiongoal="96"></div><!-- /.progress-bar -->
                            </div><!-- /.progress -->
                        </div><!-- /.skill -->
                    </div>
                    <div class="col-md-4">
                        <div class="skill">
                            <h4>EXPRESS JS</h4>
                            <div class="progress">
                                <div class="progress-bar" role="progressbar" data-transitiongoal="85"></div><!-- /.progress-bar -->
                            </div><!-- /.progress -->
                        </div><!-- /.skill -->
                        <div class="skill">
                            <h4>CISCO NETWORKING</h4>
                            <div class="progress">
                                <div class="progress-bar" role="progressbar" data-transitiongoal="95"></div><!-- /.progress-bar -->
                            </div><!-- /.progress -->
                        </div><!-- /.skill -->
                    </div>
                </div>
            </div>
        </section><!-- /.secton-skills -->

        <section id="service" class="site-section section-services overlay text-center">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <h3>What i do</h3>
                        <img src="assets/img/lines.svg" class="img-lines" alt="lines">
                    </div>
                    <div class="col-sm-4">
                        <div class="service">
                            <img src="assets/img/front-end.svg" alt="Front End Developer">
                            <h4>AWS CLOUD TECHNOLOGY </h4>
                            <p>An <strong> AWS Certified Solutions Architect.</strong> Successfully designed and impletemented <strong> Multi-Tiered </strong> and <strong>Serverless Architecture Framework</strong></p>
                        </div><!-- /.service -->
                    </div>
                    <div class="col-sm-4">
                        <div class="service">
                            <img src="assets/img/back-end.svg" alt="Back End Developer">
                            <h4>BACK-END DEVELOPMENT</h4>
                            <p>Experienced in developing<strong> MERN STACK APP (MongoDB, Express JS, REACT JS, NODE JS).</strong> In-depth understanding of <strong>MVC,Google OAuth2.0, RESTful API.</strong></p>
                        </div><!-- /.service -->
                    </div>
                    <div class="col-sm-4">
                        <div class="service">
                            <img src="assets/img/consultancy.svg" alt="Coding">
                            <h4>IT SERVICE MANAGEMENT</h4>
                            <p>Certified in <strong>IT Service Management Foundation</strong> specialize in supporting end users and Infrastructure in accordance with <strong>ITIL </strong>framework to be more stronger alignment between IT and the business.</p>
                        </div><!-- /.service -->
                    </div>
                    <div class="col-sm-4">
                        <div class="service">
                            <img src="assets/img/consultancy.svg" alt="Coding">
                            <h4>Routing and Switching Technology</h4>
                            <p>Experienced day-to-day IT operation and management of organization’s <strong>IT infrastructure </strong>.In-depth understanding with network protocols such as <strong> DNS, TCP/IP,and HTTP </strong></p>
                        </div><!-- /.service -->
                    </div>
                    <div class="col-sm-4">
                        <div class="service">
                            <img src="assets/img/consultancy.svg" alt="Coding">
                            <h4>Technical Support for End-User</h4>
                            <p>Experienced troubleshoot, diagnose and resolve problems related to hardware and software.Provide one-on-one end-user <strong>incident & service request</strong> resolution for workstation software and hardware.</p>
                        </div><!-- /.service -->
                    </div>
                </div>
            </div>
        </section><!-- /.secton-services -->



        <section id="about" class="site-section section-about text-center">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 col-md-offset-3">
                        <h2>About</h2>
                        <img src="assets/img/lines.svg" class="img-lines" alt="lines">
                        <p>Hello! I'm Erjee, an <strong> AWS Certified </strong>and <strong>ITIL Certified,</strong> 
                            I specializes<strong> MERN STACK </strong> for modern JavaScript—client and server-side,<strong>  
                            AWS </strong> for cloud Solutions, and <strong>IT Networks </strong> for install, maintain, and 
                            configure Cisco networks. I have experience developing apps such as <strong> E-commerce, RESTful, 
                            Chat Application</strong> with <strong> Socket.io,</strong>  templateswith <strong> Handlerbars</strong>, 
                            Application with <strong>JWT (JSON Web Token) </strong>  and <strong>OAuth 2.0 </strong> for authentication and authorization.</p>
                        <a href="./assets/Final CV Erjee Conchas.pdf" class="btn btn-fill" target="_blank" download>Download my cv</a>
                    </div>
                </div>
            </div>
        </section><!-- /.secton-about -->


        <br> <br> <br>

        <section class="site-section section-counters text-center">
            <div class="container">
                <div class="row">
                    <div class="col-sm-4 col-xs-12">
                  
                    </div>
                    <div class="col-sm-4 col-xs-12">
                        
                    </div>
                    <div class="col-sm-4 col-xs-12">
               
                    </div>
                </div>
            </div>
        </section><!-- /.section-counters -->

        <section id="contact" class="site-section section-form text-center">
            <div class="container">

                <h3>Contact</h3>
                <img src="assets/img/lines.svg" class="img-lines" alt="lines">

            
                    <div class="row">
                        <div class="col-sm-4">
                            <div class="contact-item">
                                <div class="icon"><img src="https://img.icons8.com/bubbles/100/000000/new-post.png"/></div>
                                <div class="contact-info">
                                  <h4>Email</h4>
                                  <p>erjeeblanco60@gmail.com</p>
                                  <p>erjeeconchas01@gmail.com</p>
                                </div>
                              </div>
                            <!-- <input type="text" name="name" class="form-control mt-x-0" placeholder="Name" required> -->
                        </div>
                        
                        <div class="col-sm-4">
                            <div class="contact-items">
                                <div class="contact-item">
                                  <div class="icon"><img src="https://img.icons8.com/bubbles/100/000000/phone.png"/></div>
                                  <div class="contact-info">
                                    <h4>Phone</h4>
                                    <p>+63 977 169 8472</p>
                                    <p>+63 977 169 8472</p>
                                  </div>
                                </div>
                            <!-- <input type="email" name="email" class="form-control" placeholder="Email" required>    -->
                        </div>
                        <div class="col-sm-4">
                
                           
                            <!-- <input type="email" name="email" class="form-control" placeholder="Email" required>    -->
                        </div>
                        
                    </div>

                    <div class="contact-item">
                        <div class="icon"><img src="https://img.icons8.com/bubbles/100/000000/map-marker.png"/></div>
                        <div class="contact-info">
                          <h4>Address</h4>
                          <p>Block 7 Riverside, Brgy. Balsic,  </p> <p> Hermosa, Bataan, Philippines</p>
                        </div>
                      </div>
                    <!-- <button href="#" class="btn btn-border" type="submit">Contact <span class="glyphicon glyphicon-send"></span></button> -->
                

            </div>
        </section><!-- /.section-form -->

    </main><!-- /#main -->

    <footer id="colophon" class="site-footer">
        <div class="container">
            <div class="row">
                <div class="col-sm-4 col-xs-12">
                    <a class="icon facebook-bg" href="https://www.facebook.com/AddNSubscribe"><i class="icon-facebook"></i></a>
                    <a class="icon gplus-bg" href="https://www.linkedin.com/in/ebconchas/"><i class="icon-linkedin"></i></a>
                </div>
                <div class="col-sm-4 col-sm-offset-0 col-xs-6 col-xs-offset-3"><p class="copyright">2020. All Rights Reserved</p></div>
                <div class="col-sm-4 col-xs-3">
                    <div class="text-right page-scroll">
                        <a class="icon icon-up-bg" href="#hero"><i class="icon-up"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </footer><!-- /#footer -->

    <!-- Modals -->
    <div id="portfolioItem1" class="modal fade" role="dialog">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <a class="close" data-dismiss="modal"><span class="glyphicon glyphicon-remove"></span></a>
            <img class="img-res" src="assets/img/portfolio-1.jpg" alt="">
          </div>
          <div class="modal-body">
            <h4 class="modal-title">Real Time Weather App</h4>
            <p> A simple weather appplication that shows a latest weather forecast. </p>
            <ul> 
                <li> RESTful API </li>
                <li> Node.js </li>
                <li> Express.js </li>
                <li> HTML/CSS </li>
            </ul>
          </div>
          <div class="modal-footer">
            <a href="https://conchas-weather-apps.herokuapp.com" target="_blank" class="btn btn-fill">Visit Page</a>
          </div>
        </div><!-- /.modal-content -->
      </div><!-- /.modal-dialog -->
    </div><!-- /.modal -->

    <div id="portfolioItem2" class="modal fade" role="dialog">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <a class="close" data-dismiss="modal"><span class="glyphicon glyphicon-remove"></span></a>
            <img class="img-res" src="assets/img/portfolio-2.jpg" alt="">
          </div>
          <div class="modal-body">
            <h4 class="modal-title">Chat Application</h4>
            <p>Real-time communication with SOCKET.IO  </p>
            <ul> 
                <li>Socket.IO </li>
                <li> Node.js </li>
                <li> Express.js </li>
                <li> HTML/CSS </li>
            </ul>
          </div>
          <div class="modal-footer">
            <a href="https://conchas-chat-app.herokuapp.com/" target="_blank" class="btn btn-fill">Visit Page</a>
          </div>
        </div><!-- /.modal-content -->
      </div><!-- /.modal-dialog -->
    </div><!-- /.modal -->

    <div id="portfolioItem3" class="modal fade" role="dialog">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <a class="close" data-dismiss="modal"><span class="glyphicon glyphicon-remove"></span></a>
            <img class="img-res" src="assets/img/portfolio-3.jpg" alt="">
          </div>
          <div class="modal-body">
            <h4 class="modal-title">Serverless Framework </h4>
            <p> Tech Stack </p>
            <ul>

               <li>REST API and CRUD endpoints (AWS Lambda, API Gateway) </li> 

               <li> Data persistence (AWS DynamoDB) </li>

               <li>  Message Queues for cross-service communication (AWS SQS) </li>

               <li>  Scheduled event triggers (AWS EventBridge) </li>

               <li> Cloud stack management (AWS CloudFormation) </li> 

              <li>  Object storage on the cloud (AWS S3) </li> 

              <li>  Email notifications (AWS SES) </li> 


           <li>      Authentication and Authorization (Lambda Authorizer) </li>

    <li>                Data validation and error handling </li> 



            </ul>  
          </div>
          <div class="modal-footer">
            <a href="#" class="btn btn-fill">Visit Page</a>
          </div>
        </div><!-- /.modal-content -->
      </div><!-- /.modal-dialog -->
    </div><!-- /.modal -->

    <div id="portfolioItem4" class="modal fade" role="dialog">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <a class="close" data-dismiss="modal"><span class="glyphicon glyphicon-remove"></span></a>
            <img class="img-res" src="assets/img/portfolio-4.jpg" alt="">
          </div>
          <div class="modal-body">
            <h4 class="modal-title">Ecommerce Application</h4>
            <p> Real-world Ecommerce App with</p>
            <ul> 
                <li> React JS front-end </li>
                <li>React-Bootstrap </li>
                <li>Global state with Redux </li>
                <li> Node JS</li>
                <li>Express JS </li>
                <li> MongoDB </li>
                <li>JWT authentication </li>
                <li>PayPal API </li>
            </ul>
          </div>
          <div class="modal-footer">
            <a href="https://conchas-ecomm.herokuapp.com/" target="_blank" class="btn btn-fill">Visit Page</a>
          </div>
        </div><!-- /.modal-content -->
      </div><!-- /.modal-dialog -->
    </div><!-- /.modal -->

    <div id="portfolioItem5" class="modal fade" role="dialog">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <a class="close" data-dismiss="modal"><span class="glyphicon glyphicon-remove"></span></a>
            <img class="img-res" src="assets/img/portfolio-5.jpg" alt="">
          </div>
          <div class="modal-body">
            <h4 class="modal-title">Social Media App</h4>
            <p> Basic Social network platform </p>
            <ul> 
                <li> Node.js </li>
                <li> Express.js </li>
                <li> Handlebars Templates</li>
                <li> MongoDB </li>
                <li>OAuth2.0 </li>
            </ul>

          </div>
          <div class="modal-footer">
            <a href="https://conchas-social-network.herokuapp.com/" target="_blank" class="btn btn-fill">Visit Page</a>
          </div>
        </div><!-- /.modal-content -->
      </div><!-- /.modal-dialog -->
    </div><!-- /.modal -->

    <div id="portfolioItem6" class="modal fade" role="dialog">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <a class="close" data-dismiss="modal"><span class="glyphicon glyphicon-remove"></span></a>
            <img class="img-res" src="assets/img/portfolio-6.jpg" alt="">
          </div>
          <div class="modal-body">
            <h4 class="modal-title">RESTful API for Task Management App</h4>
            <p>RESTful API with Node JS</p>
            <ul> 
                <li> Node JS </li>
                <li>Express JS </li>
                <li> MongoDB </li>
            </ul>
          </div>
          <div class="modal-footer">
            <a href="https://github.com/erjeeblanco60/tasksApp" target="_blank" class="btn btn-fill">Visit Page</a>
          </div>
        </div><!-- /.modal-content -->
      </div><!-- /.modal-dialog -->
    </div><!-- /.modal -->
        </div>
    )
}

export default DashboardScreen
