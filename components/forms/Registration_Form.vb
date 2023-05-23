<%@ Control Language="vb" AutoEventWireup="false" CodeBehind="capturecontrol.ascx.vb" Inherits="smallshout_members.capturecontrol" %>
<%@ Register Src="../../controls/google_verify.ascx" TagPrefix="uc1" TagName="google_verify" %>


                <asp:ScriptManager ID="ScriptManager1" runat="server"></asp:ScriptManager>
                <br /><h2>Booking Form</h2>
                    <div class="container">
                        <asp:Label ID="lblerror2" runat="server" ForeColor="#CC0000" Font-Bold="True"></asp:Label>
                        <asp:Label runat="server" ID="bookingheader">If you are interested in finding out more about our services, please either call us or complete this form and one of our friendly team will be in touch. On completing the form, you will be sent login details to access the  members’ area, where you will be able to book courses and events and visit our shop.<br /></asp:Label>
                        <asp:Label ID="studenttitle" runat="server" Font-Bold="True"><b>Class Details</b><br /></asp:Label>
                        <asp:DropDownList class="contactField" runat="server" ID="ddvenues" AutoPostBack="True"></asp:DropDownList><br />
                        <asp:DropDownList ID="ddclasses" class="contactField" runat="server" AutoPostBack="True"></asp:DropDownList>
                        <asp:Label ID="lblclassfullmessage" runat="server" ForeColor="Red" style="text-align:right" Font-Bold="True" Text="SORRY, This class is currently full.<br/> 
                            Please select another class or fill in the rest of the form and we will keep your details on file and will put the <br/> 
                            student on the waiting list until a space becomes available."><br /></asp:Label>
                        <b>Student Details</b><br />
                        <asp:TextBox ID="txtstudentfirstname" runat="server" required class="contactField" Width="300" placeholder="Student first name"></asp:TextBox><br />
                        <asp:TextBox ID="txtstudentsurname" runat="server" required class="contactField" Width="300" placeholder="Student surname"></asp:TextBox><br />
                        <asp:DropDownList ID="ddgender" class="contactField" runat="server" width="250">
                            <asp:ListItem Value="0">Gender</asp:ListItem>
                            <asp:ListItem Value="1">Male</asp:ListItem>
                            <asp:ListItem Value="2">Female</asp:ListItem>
                        </asp:DropDownList><br />
                        <table>
                            <tr>
                                <td colspan="3">Date of Birth</td>
                            </tr>
                            <tr>
                                <td>Day</td>
                                <td>Month</td>
                                <td>Year</td>
                            </tr>
                            <tr>
                                <td><asp:DropDownList ID="ddday" class="contactField" runat="server"></asp:DropDownList></td>
                                <td><asp:DropDownList ID="ddmonth" class="contactField" runat="server"></asp:DropDownList></td>
                                <td><asp:DropDownList ID="ddyear" class="contactField" runat="server"></asp:DropDownList></td>
                            </tr>
                        </table>
                        <asp:TextBox ID="txtschool" class="contactField" runat="server" TextMode="SingleLine" placeholder="School."></asp:TextBox>
                        <asp:TextBox ID="txtnotes" class="contactField" runat="server" Height="69px" TextMode="MultiLine" placeholder="Any medical or special educational needs?"></asp:TextBox>
                        <b>Your Details</b><br />
                        <asp:TextBox ID="txtcontactfirstname" runat="server" required class="contactField" Width="300" placeholder="Contact first name"></asp:TextBox><br />
                        <asp:TextBox ID="txtcontactsurname" runat="server" required class="contactField" Width="300" placeholder="Contact surname"></asp:TextBox><br />
                        <asp:TextBox ID="txtcontactemail" Type="email" required class="contactField" runat="server" width="300" placeholder="Email"></asp:TextBox><br />
                        <asp:TextBox ID="txtmobile" runat="server" required class="contactField" Width="300" placeholder="Mobile"></asp:TextBox><br />
                        <asp:DropDownList ID="ddrelashionship" class="contactField" runat="server" width="250"></asp:DropDownList><br />
                        <asp:TextBox ID="TxtPassword" runat="server" class="contactField" TextMode="Password" placeholder="Password"></asp:TextBox><br />
                        <ajaxToolkit:PasswordStrength TargetControlID="Txtpassword" ID="PasswordStrength1"
                                runat="server" DisplayPosition="BelowLeft" StrengthIndicatorType="Text"
                                PreferredPasswordLength="8" PrefixText="Strength:" TextCssClass="TextIndicator_TextBox1"
                                MinimumNumericCharacters="0" MinimumSymbolCharacters="0" RequiresUpperAndLowerCaseCharacters="false"
                                TextStrengthDescriptions="Very Poor;Weak;Average;Strong;Excellent"
                                TextStrengthDescriptionStyles="cssClass1;cssClass2;cssClass3;cssClass4;cssClass5"
                                CalculationWeightings="50;15;15;20" />
                        <asp:TextBox ID="TxtConfirmPassword" runat="server" class="contactField" TextMode="Password" placeholder="Confirm Password"></asp:TextBox><br />
                        <uc1:google_verify runat="server" ID="google_verify" />
                        <asp:Button ID="btnlogin" runat="server" CssClass="button-big button-color" Text="Register" /><br />
                        <asp:Label ID="lblerror" runat="server"  ForeColor="#CC0000" Font-Bold="True"></asp:Label>
                            
                        </div>