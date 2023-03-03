<h1>Combined API</h1>
<h5>/admin/getCombinedResponse/:month</h5>

<ul>
   <li>
accepted format of month = [january, february... , december (uppercase or lowercase)] or [01,02,03 ...., 12]   
   </li>
   <li>
retrieves data and sends 3 types of response
 => data from the statistics api, bar chart api, pie chart api
   
   </li>
</ul>

<h1>API for statistics</h1>

<h5>/sales/getSalesData/:month</h5>

<ul>
   <li>
accepted format of month = [january, february... , december (uppercase or lowercase)] or [01,02,03 ...., 12]   
   </li>
   <li>
retrieves data and sends 3 types of response
=> Sale amount of that month, Sold items of that month and Not sold items of that month
   </li>
</ul>

<h1>API for bar chart</h1>

<h5>/sales/getBarChartData/:month</h5>
<ul>
   <li>
   accepted format of month = [january, february... , december (uppercase or lowercase)] or [01,02,03 ...., 12]
   </li>
   <li>
retrieves data and sends one response
 => An object containing the price ranges 
    - 0 - 100
    - 101 - 200
    - 201-300
    - 301-400
    - 401-500
    - 501 - 600
    - 601-700
    - 701-800
    - 801-900
    - 901-above
 and the count of the sales that fall under each range
   
   </li>
</ul>

<h1>API for pie chart</h1>

<h5>/sales/getPieChartData/:month</h5>
<ul>
   <li>accepted format of month = [january, february... , december (uppercase or lowercase)] or [01,02,03 ...., 12]</li>
   <li>retrieves data and sends one response
   => An object containing the categories of the sales
   and the count of the sales that fall under each category</li>
</ul>
