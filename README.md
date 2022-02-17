# My Tech Blog

## Table Of Contents

- [Screenshot](#Screenshot)
- [Link To My Website](#Link-To-My-Website)
- [Description](#Description)
- [Author](#Author)
- [Installation](#Installation)
- [Usage](#Usage)
- [Credits](#Credits)
- [License](#License)
- [Technology](#Technology)

## Screenshot

![Site screenshot](images/mysite.png?raw=true "Cool Tech Blog")

## Link-To-My-Website

[Click Here To View My Website](https://my-cool-tech-blog.herokuapp.com/)

## Description

This is my project where I created a tech blog website. I hosted it through heroku which you can see above. The idea of this website was to have a universal blog site where anyone can post their own blog about technology. A user of the site would be a lover of tech and they would be able to login/sign up through the site, create blogposts, and also edit their blogposts too. Other users can comment on each other's blogs if they wanted to if not they would be able to read the content that was made after clicking on the blog post's title. With the theme of tech I gave the website a matrix or terminal feel that way a user would have a fun expirence using the site.

## Technology

The technologies used for this app were as follows: Javascript, Handlebars for the html, CSS. Also used npms such as: Express, bcrypt, connect-session-sequelize, dotenv, express-session, mysql2, sequelize

## Author

Name: Brandon Diaz

Contact email: brandonjustindiaz@gmail.com

GitHub: [1Clide1](https://github.com/1Clide1)

## Installation

To use this project all you have to do is click the link above and it will take you to the heroku hosted website where then you can use or test the site out if you wanted to.

## Usage

To use this project all you have to do is after you clicked the link to the website, you would then need to login. If you were to click the posts shown it would also redirect you to the login page, if you don't have an account you would then need to click the sign up button and create an account. After you have created an account you will now see a dashboard button on the navigation. You can then click that button and it will take you to your dashboard where you can then click the create blog button. Once the blog is created it will automatically show up in the home page. If you wanted to you could go back to the dashboard and edit the blog post. If not once logged in you can then view other users posts and add comments. That is how you can fully use this project/site.

## Credits

This project I felt like was very hard and it took me days to finish the project, however I feel like I did a great job at achieving what I wanted. I personally feel like I nailed the look and tried to make this site as best as I could. I used a lot from what I learned from my previous group project that I was apart of and I felt like that gave me a huge boost on finishing this website. I also used stack overflow and youtube whenever I was stuck, especially with css on my footer issues that I was having with. My main issue that I came across with this website was that I could not understand how I could get the id of the commentsthrough the front end that way I could fetch that specific data back to the backend. I found a cool trick where I could delete the blogposts using their id because I also used their id for the end of my address bar. I found out that I could essentially filter out the bar until I had the id number and then I would send that back to the backend that way the post could be deleted. The problem I was facing was that I could not do that with the comments as they were being displayed on those blogposts. I wasn't able to get that working however, I created more of a gag button that used the same technique as getting the blogpost id that way I could delete the blog post. And since the comments model is connected to the blogpost id, the gag button I created was called nuke comments. That in turn would delete all the comments accosicated with that blogpost id. A user could only do this to their own blogposts if they were to edit their blog posts so even if this gag button can seem toxic I did not let users have the ability to then go deleting other users comments. Other than that I feel like I learned a lot with this project and I am happy that I have completed it. Thank you for viewing my project and github page.

## License

![License](https://img.shields.io/static/v1?label=license&message=MIT&color=yellow)

This project is licensed under the MIT License: To get a better look at [License] visit (https://choosealicense.com/licenses/mit/).

      MIT License

      Copyright (c) [2021] []

      Permission is hereby granted, free of charge, to any person obtaining a copy
      of this software and associated documentation files (the "Software"), to deal
      in the Software without restriction, including without limitation the rights
      to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
      copies of the Software, and to permit persons to whom the Software is
      furnished to do so, subject to the following conditions:

      The above copyright notice and this permission notice shall be included in all
      copies or substantial portions of the Software.

      THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
      IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
      FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
      AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
      LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
      OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
      SOFTWARE.
