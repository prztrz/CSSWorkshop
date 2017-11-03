# Description
This website is a CSS and Javascript workshop to present author's skill and his learning progress.

Whole project has been created with pure JavaScript, HTML and sass-converted css, without using any additional libraries.

# Demo
You can find the demo of the project on: https://prztrz.github.io/Sit-on-Chair/

# Instalation and guidelines
To install the project simply download it and run the index.html in your web broswer

The project has been made using gulp and gulp-sass tools

#### .scss files
All scss files are pcase in /scss folder:

* style.scss - main .scss file, imports all the .scss files created for the project and convert them to css/style.css file.

**/scss/modules** contains reusable modules for sass:
* \_mixins.scss - contains mixins used in the scss code.
* \_variables.scss -contains variables used in scss code.

**/scss/partials** contains styleshets for particular sections of index.html:
* \_global-classes.scss - contains reusable css selectors
* \_grid.scss - contains responsive grid for the website
* \_page-header.scss - contains full stylesheet for header of the website
* \_section-slider.scss - contains full stylesheet for the section slider
* \_section-portfolio.scss - contains full stylesheet for the section portfolio
* \_section-pricelist.scss - contains full stylesheet for the section pricelist
* \_section-application - contains full stylesheet for the section application
* \_section-contact.scss - contains full stylesheet for the section contact
* \_page-footer.scss - contains full stylesheet for footer of the website

#### Scss grid

The grid was created by the author and it bases on 12 columns and 3 window-width breakboints:
* default breakpoint (mobile-first - max-width: 766px)
* \@tablet breakpoint - \@media (min-width: 767px)
* \@laptop breakpoint - \@media (min-width: 1280px)

Columns are `<div>` element with the class col-\*\*-XX  <br>
\*\* is the specified breakpoint:

* sm - for small devices (max-width: 766px)
* md - for medium devices (min-width: 767px)
* lg for large devices (min-width: 1280px)

XX (1-12) is the width the column takes on the screen. The sum of all columns in one row on the screen must be 12. The grid scales up so using .col-sm-XX classes gives the same effect on small and larger mobiles uness additional col-md and col-lg classes are attached to the div.

For example:<br>
The code:<br>
`<div class="col-sm-12 col-md-6 col-lg-4"></div>`
`<div class="col-sm-12 col-md-6 col-lg-4"></div>`
`<div class="col-sm-12 col-md-12 col-lg-4"></div>`

Represent three columns which will be placed next to each other on large devices. On medium devices first two collumns will be placed next to each other whereas third collumn will be placed in the next row. On small devices all columns will be placed in separate rows.

#### .js files
All .js files are placed in /js folder:

* menu_app.js - contains scripts for resposnive navigation on the website
* slider_app.js - contains scripts for slider functionality on the website.
* pricelist_app - contains scripts for `<section class="pricelist">` on the website
* application_app - contains scripts for order form and price calculator for the project

# Licence and Author

Copyright (c) 2017 Przemysław Trzepiński

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
