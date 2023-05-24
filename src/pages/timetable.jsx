import "./css/Timetable.css";
import "./pages.css";

export default function Timetable() {
    return (   
    <div className="timetable-page">
        <h1>Class Timetable</h1>
        <div > 
            <table width="100%" border="0">
                <tr>
                    <td className="dragon">
                        <a href="/" alt="Find out about our classes for 3 and 4 Years old">
                            <h6>Little Dragons</h6>
                            <img src="images/dragonlogo.png" alt="" /></a>
                            <h6>3 - 4 year olds</h6>
                    </td>
                    <td className="children">
                        <a href="/" alt="Find out about our classes for 5 to 8 Years old">
                            <h6>Mini Ninjas</h6>
                            <img src="images/mininjalogo.png" alt="" /></a>
                            <h6>5 - 7 year olds</h6>
                    </td>
                    <td className="preteen"><a href="/" alt="Find out about our classes for 9 to 11 Years old"><h6>Junior MA</h6><img src="images/kidlogo.png" alt="" /></a><h6>8 - 11 year olds</h6></td>
                    <td className="teen"><a href="/" alt="Find out about our classes for 11 to 16 Years old"><h6>Teen MA</h6><img src="images/ZKSLOGO.png" alt="" /></a><h6>11 years Plus</h6></td>
                    <td className="adult"><a href="/" alt="Find out about our classes for 17 Years old and over"><h6>Adults</h6><img src="images/ZKSLOGO.png" alt="" /></a><h6>17 years Plus</h6></td>
                            
                </tr>
            </table>
            <h4>Select the day to view the classes that are available.</h4>
            <h6>If you find a className that is suitable why not book a trial session.</h6>
            <a href="https://www.smallshout.co.uk/members/register/new_registration.aspx?oid=1456145&I=0" target="new" className="button trial">Book your Free Trial</a>
        </div>

        <button className="collapsible">Monday classes</button>
        <div className="content">
            <table width="100%" border="0">
                <tr>
                    <th scope="col">Start</th>
                    <th scope="col">Finish</th>
                    <th scope="col">Venue</th>
                    <th scope="col">Age Groups</th>
                </tr>
                       
                <tr>
                    <td>3.20pm</td>
                    <td>4.20pm</td>
                    <td>Greenridge Primary School<br />Buckingham Park</td>
                    <td className="children">School pupils only<br/>7 - 8 <small>years old</small>
                    </td>
                </tr> 
                
                <tr>
                    <td>4.15pm</td>
                    <td>4.45pm</td>
                    <td>St Mary's School<br />Haddenham</td>
                    <td className="dragon">Little Dragons<br />3 - 4 <small>years old</small>
                    </td>
                </tr>

                <tr>
                    <td>5.00pm</td>
                    <td>5.45pm</td>
                    <td>St Mary's School<br />Haddenham</td>
                    <td className="children">5 - 7 <small>years old</small>
                    </td>
                </tr>

                <tr>
                    <td>6.00pm</td>
                    <td>6.45pm</td>
                    <td>St Mary's School<br />Haddenham</td>
                    <td className="preteen">8 - 9<small>years old</small>
                    </td>
                </tr>

                <tr>
                            <td>7.00pm</td>
                            <td>7.45pm</td>
                            <td>St Mary's School<br />Haddenham</td>
                            <td className="preteen">10 - 11<small>years old</small>
                            </td>
                        </tr>
                <tr>
                            <th scope="col">Start</th>
                            <th scope="col">Finish</th>
                            <th scope="col">Venue</th>
                            <th scope="col">Age Groups</th>
                        </tr>
                <tr>
                            <td>5.00pm</td>
                            <td>5.45pm</td>
                               <td>ZKSMA HQ<br />Aylesbury</td>
                            <td className="children">5 - 7 <small>years old</small>
                            </td>
                        </tr>

                        <tr>
                            <td>6.00pm</td>
                            <td>6.45pm</td>
                                <td>ZKSMA HQ<br />Aylesbury</td>
                            <td className="preteen">8 - 11 <small>years old</small>
                            </td>
                        </tr>
                   
                        <tr>
                            <td>7.00pm</td>
                            <td>7.45pm</td>
                               <td>ZKSMA HQ<br />Aylesbury</td>
                             <td className="teen">11 - 16 <small>years old</small>
                            </td>
                       
                        </tr> 
                  <tr>
                            <td>7.45pm</td>
                            <td>8.30pm</td>
                               <td>ZKSMA HQ<br />Aylesbury</td>
                            <td className="adult">Adult Muay Thai<br /><small>Fundamental level</small>  <br/>  
                            </td>
                        </tr>
                <tr>
                            <td>8.30pm</td>
                            <td>9.30pm</td>
                               <td>ZKSMA HQ<br />Aylesbury</td>
                            <td className="adult">Adult Muay Thai<br /><small>Advance level</small> <br/>  <b>Class is invite only.</b> 
                            </td>
                        </tr>
                    </table>
                </div>
                <button className="collapsible">Tuesday classes</button>
                <div className="content">
                    <table width="100%" border="0">
                        <tr>
                            <th scope="col">Start</th>
                            <th scope="col">Finish</th>
                            <th scope="col">Venue</th>
                            <th scope="col">Age Groups</th>
                        </tr>
                        <tr>
                            <td>4.15pm</td>
                            <td>4.45pm</td>
                            <td>Buckingham Park Community Centre<br />Buckingham Park</td>
                            <td className="dragon">Little Dragons<br />3 - 4 <small>years old</small>
                            </td>
                        </tr>
                        <tr>
                            <td>4.45pm</td>
                            <td>5.45pm</td>
                            <td>Buckingham Park Community Centre<br />Buckingham Park</td>
                            <td className="children">5 - 7 <small>years old</small>
                            </td>
                        </tr>
                        <tr>
                            <td>5.45pm</td>
                            <td>6.45pm</td>
                            <td>Buckingham Park Community Centre<br />Buckingham Park</td>
                            <td className="preteen">8 - 11<small>years old</small>
                            </td>
                        </tr>
 <tr>
                            <th scope="col">Start</th>
                            <th scope="col">Finish</th>
                            <th scope="col">Classes at HQ</th>
                            <th scope="col">Age Groups</th>
                        </tr>
                        <tr>
                            <td>4.15pm</td>
                            <td>4.45pm</td>
                            <td>Wendover St Anne's Hall<br />Wendover</td>
                            <td className="dragon">Little Dragons<br />3 - 4 <small>years old</small>
                            </td>
                        </tr>
                        <tr>
                            <td>4.45pm</td>
                            <td>5.45pm</td>
                            <td>Wendover St Anne's Hall<br />Wendover</td>
                            <td className="children">5 - 7 <small>years old</small>
                            </td>
                        </tr>
                        <tr>
                            <td>5.45pm</td>
                            <td>6.45pm</td>
                            <td>Wendover St Anne's Hall<br />Wendover</td>
                            <td className="preteen">8 - 11<small>years old</small>
                            </td>
                        </tr> 
      <tr>
                            <td>12.00pm</td>
                            <td>1.00pm</td>
                            <td>ZKSMA HQ <br />Aylesbury</td>
                            <td className="adult">Adult Brazilian Jiujitsu<br /><small>All levels gi</small>  <br/>  <b>New adult timetable starts Oct 2021</b> 

                            </td>
                        </tr>

<tr>
                            <td>4.15pm</td>
                            <td>4.45pm</td>
                            <td>ZKSMA HQ <br />Aylesbury</td>
                            <td className="dragon">Little Dragons<br />3 - 4 <small>years old</small>
                            </td>
                        </tr>

                        <tr>
                            <td>5.00pm</td>
                            <td>5.45pm</td>
                            <td>
                               ZKSMA HQ <br />Aylesbury
                            </td>
                            <td className="children">5 - 7 <small>years old</small>
                            </td>
                        </tr>
                        <tr>
                            <td>6.00pm</td>
                            <td>6.45pm</td>
                            <td>
                                ZKSMA HQ <br />Aylesbury</td>
                            <td className="preteen">8 - 11 <small>years old</small>
                            </td>
                        </tr>
                        <tr>
                            <td>7.00pm</td>
                            <td>7.45pm</td>
                            <td>
                                ZKSMA HQ <br />Aylesbury
                            </td>
                            <td className="teen">11 - 16 <small>years old</small>
                            </td>
                        </tr>
<tr>
                            <td>7.45pm</td>
                            <td>8.30pm</td>
                            <td>ZKSMA HQ <br />Aylesbury</td>
                            <td className="adult">Adult Brazilian Jiujitsu<br /><small>Fundamental level gi</small>  <br/>  
                            </td>
                        </tr>
<tr>
                            <td>8.30pm</td>
                            <td>9.15pm</td>
                            <td>ZKSMA HQ <br />Aylesbury</td>
                            <td className="adult">Adult Brazilian Jiujitsu<br /><small>Adcanced level gi</small>  <br/>  <b>Class is invite only.</b> 
                            </td>
                        </tr>
                    </table>

                </div>
                <button type="button" className="collapsible">Wednesday Classes</button>
                <div className="content">
                    <table width="100%" border="0">
                        <tr>
                            <th scope="col">Start</th>
                            <th scope="col">Finish</th>
                            <th scope="col">Venue</th>
                            <th scope="col">Age Groups</th>
                        </tr>
                             <tr>
                            <td rowspan="2">8.00am</td>
                            <td rowspan="2">8.45am</td>
                            <td rowspan="2">Stoke Mandeville Combined School<br />Stoke Mandeville</td>
                            <td className="children"><br />School pupils only<br />5 - 7 <small>years old</small>
                            </td>
                        </tr>
                   <tr>
                            <td className="preteen">8 - 11 <small>years old</small>
                            </td>
                        </tr>
                        <tr>
                            <td rowspan="2">10.30am</td>
                            <td rowspan="2">11.30am</td>
                            <td rowspan="2">The Cabin<br />Chiltern View Nursery</td>
                            <td className="children"><br />Home Ed MA Class <br />5 - 7 <small>years old</small>
                            </td>
                        </tr>
                        <tr>
                            <td className="preteen">9 - 11 <small>years old</small>
                            </td>
                        </tr>
                        <tr>
                            <td rowspan="2">3.15pm</td>
                            <td rowspan="2">4.00pm</td>
                            <td rowspan="2">Berryfields Primary School<br />Aylesbury</td>
                            <td className="children"><br />School pupils only<br /><br />5 - 7 <small>years old</small>
                            </td>
                        </tr>
                        <tr>
                            <td className="preteen">8 - 11 <small>years old</small>
                            </td>
                        </tr>
                        <tr>
                            <td rowspan="2">4.15pm</td>
                            <td rowspan="2">5.00pm</td>
                            <td rowspan="2">Broughton Infant School<br />Aylesbury</td>
                            <td className="children"><br />5 - 7 <small>years old</small>
                            </td>
                        </tr>     <tr>
                            <td>5.00pm</td>
                            <td>5.45pm</td>
                            <td>
                               ZKSMA HQ <br />Aylesbury
                            </td>
                            <td className="children">5 - 7 <small>years old</small>
                            </td>
                        </tr>
                        <tr>
                            <td>6.00pm</td>
                            <td>6.45pm</td>
                            <td>
                                ZKSMA HQ <br />Aylesbury</td>
                            <td className="preteen">8 - 11 <small>years old</small>
                            </td>
                        </tr>
                        <tr>
                            <td>7.00pm</td>
                            <td>7.45pm</td>
                            <td>
                                ZKSMA HQ <br />Aylesbury
                            </td>
                            <td className="teen">11 - 16 <small>years old</small>
                            </td>
                        </tr>

                  <tr>
                            <td>7.45pm</td>
                            <td>8.30pm</td>
                               <td>ZKSMA HQ<br />Aylesbury</td>
                            <td className="adult">Adult Muay Thai<br /><small>Fundamental level</small>                              </td>
                        </tr>
<tr>
                            <td>8.30pm</td>
                            <td>9.30pm</td>
                               <td>ZKSMA HQ<br />Aylesbury</td>
                            <td className="adult">Adult Muay Thai<br /><small>Advanced level</small> <br/>  <b>Class is invite only.</b> 
                            </td>
                        </tr>
 <tr>
                            <th scope="col">Start</th>
                            <th scope="col">Finish</th>
                            <th scope="col">Venue</th>
                            <th scope="col">Age Groups</th>
                        </tr>
                        <tr>
                            <td rowspan="2">6.00pm</td>
                            <td rowspan="2">6.45pm</td>
                            <td rowspan="2">Wingrave Community Centre<br />wingrave</td>
                            <td className="children">5 - 7 <small>years old</small>
                            </td>
                        </tr>
                        <tr>
                            <td className="preteen">8 - 11<small>years old</small>
                            </td>
                        </tr>
                        <tr>
                            <td>7.00pm</td>
                            <td>7.45pm</td>
                            <td>Wingrave Community Centre<br />wingrave</td>
                            <td className="teen">11 - 16 <small>years old</small>
                            </td>
                        </tr>
                    </table>

                </div>
                <button type="button" className="collapsible">Thursday Classes</button>
                <div className="content">
                    <table width="100%" border="0">
                        <tr>
                            <th scope="col">Start</th>
                            <th scope="col">Finish</th>
                            <th scope="col">Venue</th>
                            <th scope="col">Age Groups</th>
                        </tr> <tr>
                            <td rowspan="2">8.00am</td>
                            <td rowspan="2">8.45am</td>
                            <td rowspan="2">Long Marston School<br />Long Marston</td>
                            <td className="children"><br />School pupils only<br />5 - 7 <small>years old</small>
                            </td>
                        </tr>
                        <tr>
                            <td className="preteen">8 - 11 <small>years old</small>
                            </td>
                        </tr> <tr>
                            <th scope="col">Start</th>
                            <th scope="col">Finish</th>
                            <th scope="col">Venue</th>
                            <th scope="col">Age Groups</th>
                        </tr> 
<tr>
                            <td>12.00pm</td>
                            <td>1.00pm</td>
                               <td>ZKSMA HQ<br />Aylesbury</td>
                            <td className="adult">Adult Muay Thai<br /><small>All levels</small> <br/>  <b>New className coming soon.</b> 
                            </td>
                        </tr>
<tr>
                            <td>7.00pm</td>
                            <td>7.45pm</td>
                            <td>
                                ZKSMA HQ <br />Aylesbury
                            </td>
                            <td className="teen">11 - 16 <small>years old</small><br/>  <b>New className coming soon.</b> 

                            </td>
                        </tr>
<tr>
                            <td>7.45pm</td>
                            <td>8.30pm</td>
                            <td>ZKSMA HQ <br />Aylesbury</td>
                            <td className="adult">Adult Brazilian Jiujitsu<br /><small>Fundamental level gi</small>  <br/>  <b>New className coming soon.</b> 
  
                            </td>
                        </tr>
<tr>
                            <td>8.30pm</td>
                            <td>9.15pm</td>
                            <td>ZKSMA HQ <br />Aylesbury</td>
                            <td className="adult">Adult Brazilian Jiujitsu<br /><small>Adcanced level gi</small>  <br/>  <b>New className coming soon.</b> 
                            </td>
                        </tr>

                <tr>
                            <th scope="col">Start</th>
                            <th scope="col">Finish</th>
                            <th scope="col">Venue</th>
                            <th scope="col">Age Groups</th>
                        </tr> 
                        <tr>
                            <td>4.15pm</td>
                            <td>4.45pm</td>
                            <td>Buckingham Park Community Centre<br />Buckingham Park</td>
                            <td className="dragon">Little Dragons<br />3 - 4 <small>years old</small>
                            </td>
                        </tr> 
                        <tr>
                            <td>5.00pm</td>
                            <td>5.45pm</td>
                            <td>Buckingham Park Community Centre<br />Buckingham Park</td>
                            <td className="children">5 - 7 <small>years old</small>
                            </td>
                        </tr>
                        <tr>
                            <td>6.00pm</td>
                            <td>6.45pm</td>
                            <td>Buckingham Park Community Centre<br />Buckingham Park</td>
                            <td className="preteen">8 - 11<small>years old</small>
                            </td>
                        </tr><tr>
                            <th scope="col">Start</th>
                            <th scope="col">Finish</th>
                            <th scope="col">Venue</th>
                            <th scope="col">Age Groups</th>
                        </tr> 
                      <tr>

                            <td>4.15pm</td>
                            <td>4.45pm</td>
                            <td>Fairford Leys Centre<br />Aylesbury</td>
                            <td className="dragon">Little Dragons<br />3 - 4 <small>years old</small>
                            </td>
                        </tr>
                        <tr>
                            <td>5.00pm</td>
                            <td>5.45pm</td>
                            <td>Fairford Leys Centre<br />Aylesbury</td>
                            <td className="children">5 - 7 <small>years old</small>
                            </td>
                        </tr>
                        <tr>
                            <td>6.00pm</td>
                            <td>6.45pm</td>
                            <td>Fairford Leys Centre<br />Aylesbury</td>
                            <td className="preteen">8 - 11<small>years old</small>
                            </td>
                        </tr>
                        <tr>
                            <td>7.00pm</td>
                            <td>7.45pm</td>
                            <td>Fairford Leys Centre<br />Aylesbury</td>
                            <td className="teen">12 - 16<small>years old</small>
                            </td>
                        </tr>
<tr>
                            <th scope="col">Start</th>
                            <th scope="col">Finish</th>
                            <th scope="col">Venue</th>
                            <th scope="col">Age Groups</th>
                        </tr> 
                        <tr>
                            <td rowspan="2">6.30pm</td>
                            <td rowspan="2">7.15pm</td>
                            <td rowspan="2">Princes Risborough Primary School<br />Princes Risborough</td>
                            <td className="children">5 - 7 <small>years old</small>
                            </td>
                        </tr>
                        <tr>
                            <td className="preteen">8 - 11<small>years old</small>
                            </td>
                        </tr>
<tr>
                            <td>3.20pm</td>
                            <td>4.00pm</td>
                            <td>Greenridge Primary School<br />Buckingham Park</td>
                            <td className="children">School pupils only<br/>5 - 6 <small>years old</small>
                            </td>
                        </tr> 

                    </table>
                </div>
                <button type="button" className="collapsible">Friday Classes</button>
                <div className="content">
                    <table width="100%" border="0">
                        <tr>
                            <th scope="col">Start</th>
                            <th scope="col">Finish</th>
                            <th scope="col">Venue</th>
                            <th scope="col">Age Groups</th>
                        </tr>
<tr>
                            <td>4.15pm</td>
                            <td>5.00pm</td>
                            <td>Fairford Leys Centre<br />Aylesbury</td>
                         <td className="children">5 - 7 <small>years old</small>
                       </td>
                        </tr>
                        <tr>
                            <td>5.15pm</td>
                            <td>6.00pm</td>
                            <td>Fairford Leys Centre<br />Aylesbury</td>
                              <td className="preteen">8 - 11 <small>years old</small>                            </td>
                      
                        </tr><tr>
                            <th scope="col">Start</th>
                            <th scope="col">Finish</th>
                            <th scope="col">Venue</th>
                            <th scope="col">Age Groups</th>
                        </tr>  
<tr>
                            <td rowspan="2">11.00am</td>
                            <td rowspan="2">11.45am</td>
                            <td rowspan="2">ZKSMA HQ <br />Aylesbury</td>
                            <td className="children"><br />Home Ed MA Class <br />5 - 7 <small>years old</small>
                            </td>
                        </tr>
                        <tr>
                            <td className="preteen">9 - 11 <small>years old</small><br/>  <b>New className opening in 2021</b> 

                            </td>
                        </tr>

 <tr>
                            <td>12.00pm</td>
                            <td>1.00pm</td>
                            <td>ZKSMA HQ <br />Aylesbury</td>
                            <td className="adult">Adult Brazilian Jiujitsu<br /><small>All levels nogi</small>  <br/>  <b>New adult timetable starts Oct 2021</b> 

                            </td>
                        </tr> 
                        <tr>
                            <td>4.15pm</td>
                            <td>5.45pm</td>
                            <td>ZKSMA HQ <br />Aylesbury</td>

                            <td className="dragon">Little Dragons<br />3 - 4 <small>years old</small>
                            </td>
                        </tr>

                        <tr>
                            <td>5.00pm</td>
                            <td>5.45pm</td>
                            <td>ZKSMA HQ<br />Aylesbury</td>
                            <td className="children">5 - 7 <small>years old</small>
                            </td>
                        </tr>
                        <tr>
                            <td >6.00pm</td>
                            <td >6.45pm</td>
                            <td >ZKSMA HQ<br />Aylesbury</td>
                            <td className="preteen">8 - 11 <small>years old</small>
                            </td>
                        </tr>
                        
                        <tr>
                            <td>7.00pm</td>
                            <td>8.00pm</td>
                            <td>ZKSMA HQ<br />Aylesbury</td>
                            <td className="adult">Adult Taijitsu<br /><small>All levels</small>            </td>          </tr>
                    </table>
                </div>
                <button type="button" className="collapsible">Saturday Classes</button>
                <div className="content">
                    <table width="100%" border="0">
                        <tr>
                            <th scope="col">Start</th>
                            <th scope="col">Finish</th>
                            <th scope="col">Venue</th>
                            <th scope="col">Age Groups</th>
                        </tr>
                        <tr>
                            <td>10.00am</td>
                            <td>10.30am</td>
                            <td>Fairford Leys Centre<br />Aylesbury</td>
                            <td className="dragon">Little Dragons<br />3 - 4 <small>years old</small>
                            </td>
                        </tr>
 <tr>
                            <td>10.30am</td>
                            <td>11.00am</td>
                            <td>Fairford Leys Centre<br />Aylesbury</td>
                            <td className="dragon">Little Dragons<br />3 - 4 <small>years old</small>
                            </td>
                        </tr>
                        <tr>
                            <td>11.00am</td>
                            <td>11.45am</td>
                            <td>Fairford Leys Centre<br />Aylesbury</td>
                            <td className="children">5 - 7 <small>years old</small>
                            </td>
                        </tr>
                        <tr>
                            <td>12.00pm</td>
                            <td >12.45pm</td>
                            <td>Fairford Leys Centre<br />Aylesbury</td>
                            <td className="preteen">8 - 11<small>years old</small>
                            </td>
                        </tr>
                      
                                                            <tr>
                            <td>9.00am</td>
                            <td>9.00am</td>
                            <td>ZKSMA HQ<br />Aylesbury</td>
                            <td className="dragon">Little Dragons<br />3 - 4 <small>years old</small>
                            </td>
                        </tr>
                                                                             <tr>
                            <td>9.30am</td>
                            <td>10.00am</td>
                            <td>ZKSMA HQ<br />Aylesbury</td>
                            <td className="dragon">Little Dragons<br />3 - 4 <small>years old</small>
                            </td>
                        </tr>
                        <tr>
                            <td>10.00am</td>
                            <td>10.45am</td>
                            <td>ZKSMA HQ<br />Aylesbury</td>
                            <td className="children">5 - 7 <small>years old</small>
                            </td>
                        </tr>
                        <tr>
                            <td>11.00am</td>
                            <td>11.45am</td>
                            <td>ZKSMA HQ<br />Aylesbury</td>
                            <td className="preteen">8 - 10 <small>years old</small>
                            </td>
                        </tr>
                        <tr>
                            <td>12.00pm</td>
                            <td>12.45pm</td>
                            <td>ZKSMA HQ<br />Aylesbury</td>
                            <td className="preteen">10 - 12 <small>years old</small>
                            </td>
                        </tr>  <tr>
                           <td rowspan="2">12.10pm</td>
                            <td rowspan="2">12.25pm</td>
                          <td rowspan="2"> ZKS MA HQ<br />Aylesbury</td>
                            <td className="children">S.E.N. Class<br />5 - 7 <small>years old</small>
                            </td>
                </tr>  <tr>
   <td className="preteen">8 - 11<small>years old</small>
                            </td>
                        </tr>
                        

                        <tr>
                            <td>1.00pm</td>
                            <td>1.45pm</td>
                            <td>ZKSMA HQ<br />Aylesbury</td>
                            <td className="teen">11 - 16 <small>years old</small>
                            </td>
                        </tr>
                        <tr>
                            <td>2.00pm</td>
                            <td>2.45pm</td>
                            <td>ZKSMA HQ<br />Aylesbury</td>
                            <td className="teen">Elite Class<br />Invite only<br />11 - 16 <small>years old</small>
                            </td>
                        </tr>

 
                    </table>
                </div>
    <button type="button" className="collapsible">Sunday Classes</button>
                <div className="content">
                    <table width="100%" border="0">
                        <tr>
                            <th scope="col">Start</th>
                            <th scope="col">Finish</th>
                            <th scope="col">Venue</th>
                            <th scope="col">Age Groups</th>
                        </tr>
                  <tr>
                            <td>9.00am</td>
                            <td>10.00am</td>
                            <td>ZKSMA HQ <br />Aylesbury</td>
                            <td className="adult">Adult Brazilian Jiujitsu<br /><small>All levels gi</small> 
                            </td>
                        </tr>
                    </table>


                </div> 
                
<h1>Class Locations</h1>
<div className="six columns feature-media left">
    <h4>ZKSMA HQ</h4><p>Classes held on Monday,Tuesday, Wednesday, Thursday, Friday and Saturday for all age groups term time only.</p>
      <p>111 - 113 Cambridge Street, Aylesbury, Buckinghamshire, <br />
        HP20 1BT<br />
        <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d616.5706715664278!2d-0.809643570722919!3d51.81926629873045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876f7a6471bebad%3A0xbfaf2e31469c0d08!2s111%20Cambridge%20St%2C%20Aylesbury%20HP20%201BT!5e0!3m2!1sen!2suk!4v1629312733977!5m2!1sen!2suk"  width="400" height="300" frameborder="0"  allowfullscreen></iframe> 
        </p>
        <h4>Buckingham Park Community Centre</h4>
        <p>Classes held on Tuesday and Thursday for all age groups term time only.</p><p>       Colonel Grantham Avenue, Aylesbury, Buckinghamshire,<br />
        HP19 9AP
        <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2465.4219865821738!2d-0.8219951487541558!3d51.83498859441945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876f77130553d09%3A0xc63b78f74ccdd47d!2sBuckingham+Park+Community+Centre!5e0!3m2!1sen!2suk!4v1507648870272" width="400" height="300" frameborder="0"  allowfullscreen></iframe>
     </p>
            <h4>Fairford Leys Community Centre</h4><p>Classes held on Tuesday and Thursday for all age groups term time only.</p>
      <p>Hampden Square, Fairford Leys, Buckinghamshire,<br />
        HP19 7HT<br />
        <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2466.404328806237!2d-0.8419580487547518!3d51.81704399573713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876f722d436908f%3A0x5b6d0c2202adbf42!2sColdharbour+Parish+Council!5e0!3m2!1sen!2suk!4v1507649043860" width="400" height="300" frameborder="0"  allowfullscreen></iframe>
      </p>
      
     <h4>Green Ridge Primary Academy</h4>
      <p>President Road, Aylesbury, Buckinghamshire,<br />HP18 0YA<br />
        <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2465.1158139915747!2d-0.8598156487285828!3d51.84058059400872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876f1b85c6dd9d3%3A0x20b60b8df86bac5c!2sGreen+Ridge+Primary+Academy!5e0!3m2!1sen!2sfr!4v1566327799879!5m2!1sen!2sfr" width="400" height="300" frameborder="0"  allowfullscreen></iframe>
      </p>     
      <h4>Stoke Mandeville Combined School</h4>
      <p>Station Road, Stoke Mandeville, Buckinghamshire,<br />
        HP22 5XA<br />
        <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2468.102068293605!2d-0.7959066489702735!3d51.78602069801479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876f64257ec7dd1%3A0x1bc531a0cfb9ec88!2sStoke+Mandeville+Combined+School!5e0!3m2!1sen!2suk!4v1507719979573" width="400" height="300" frameborder="0"  allowfullscreen></iframe>
      </p> 

      <h4>Wendover St Anne's Hall</h4>
      <p>7B Aylesbury Rd, Wendover, Buckinghamshire, <br />
        HP22 6JG<br />
        <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2469.296115266397!2d-0.744180748971125!3d51.76419359961638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48765f4b476d4ac3%3A0xa9ce69329bc5f00!2sSt+Annes+Roman+Catholic+Church!5e0!3m2!1sen!2suk!4v1507719935529" width="400" height="300" frameborder="0"  allowfullscreen></iframe> 
      </p> 
        </div>
        <div className="six columns right">
        <h4>William Harding Combined School</h4><p>Classes held on Monday for all age groups term time only.</p>
        <p>Hazlehurst Drive, Aylesbury, Buckinghamshire, <br />
        HP21 9TJ<br />
        <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2467.266169337201!2d-0.7995996840325436!3d51.801296979684444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876f64e9bfa99e5%3A0xc9e57ff4c0cd9b55!2sWilliam+Harding+School!5e0!3m2!1sen!2suk!4v1535313047286" width="400" height="300" frameborder="0"  allowfullscreen></iframe> 
      </p>
<h4>Berryfields Primary School</h4>
      <p>John Fitzjohn Ave, Aylesbury<br />
        HP18 0FG
        <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1842.6734172172185!2d-0.8562965876992844!3d51.83605373832218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876f74eecfe6927%3A0x3ddc61052a83da52!2sBerryfields%20Church%20of%20England%20Primary%20School!5e0!3m2!1sen!2suk!4v1582212350543!5m2!1sen!2suk" width="600" height="450" frameborder="0"  allowfullscreen=""></iframe> 
      </p>
<h4>Broughton Community Infant School</h4>
      <p>Narbeth Drive, Aylesbury, Buckinghamshire, <br />
        HP20 1NX
        <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2466.425129431687!2d-0.7851426840320758!3d51.81666397968715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876f7c8bd6f9c2f%3A0xcfd9e7ed4f3ebfee!2sBroughton+Community+Infant+School!5e0!3m2!1sen!2suk!4v1535314458105" width="400" height="300" frameborder="0"  allowfullscreen></iframe> 
      </p>
        <h4>Haddenham St Mary's CE School</h4>
      <p>Aston Road, Haddenham, Buckinghamshire, <br />
        HP17 8AF<p />
        <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2469.244825948348!2d-0.9277880487565071!3d51.76513129954734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876f189a4b4c17d%3A0xf0b1b9b80ffc41df!2sHaddenham+St+Marys+C+E+School!5e0!3m2!1sen!2suk!4v1507648565105" width="400" height="300" frameborder="0"  allowfullscreen></iframe> 
      </p>
        <h4>Princes Risborough Primary School</h4>
      <p> Lower Road, Princes Risborough, Buckinghamshire,<br />
        HP23 4QS<br />
        <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2471.200095827856!2d-0.8325785494275032!3d51.7293754021711!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876f45c16c29a61%3A0x77ed32b762b808b5!2sPrinces+Risborough+Primary+and+Nursery+School!5e0!3m2!1sen!2suk!4v1507718519665" width="400" height="300" frameborder="0"  allowfullscreen></iframe> 
      </p>
   <h4>Wingrave Community Centre</h4>
      <p>Church Street, Wingrave, Buckinghamshire, <br />
        HP22 4PE<br />
        <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2463.885647275419!2d-0.7410060489673148!3d51.863044292359085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876579255683397%3A0x2fd2469f9c71ccac!2sWingrave+Community+Centre!5e0!3m2!1sen!2suk!4v1507720012964" width="400" height="300" frameborder="0" allowfullscreen></iframe> 
      </p>




    </div>
  

   
    <section id="subscribe">
        <div className="row section-head">
            <div className="twelve columns">

               <iframe title="map" src="https://app.purechat.com/w/DF12D46B" ></iframe> 
                <h1>Sign up now!.</h1>
                <p>If you are interested in one of our classes then why not book in for a FREE trial?</p>
                <a href="https://www.smallshout.co.uk/members/register/new_registration.aspx?oid=1456145&I=0" target="new" className="button trial">Book your Free Trial</a>
            </div>
        </div>
        <div className="row">
            <div className="twelve columns">
                <small>We never share your information or use it to spam you, we just want you to know about all the fun stuff we are doing! </small>
            </div>
            </div>
    </section> 
    </div>
   )
}