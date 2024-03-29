# TwinCAT HMI 1.12 Project Template with some examples inside.
Padova_BIT

THE SAMPLE CODE CONTAINED IN THIS PUBLICATION IS PROVIDED “AS IS” WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESSED, IMPLIED OR STATUTORY, INCLUDING WITHOUT LIMITATION, ANY WARRANTY WITH RESPECT TO NON-INFRINGEMENT, FREEDOM FROM PROPRIETARY RIGHTS OF THIRD PARTIES OR FITNESS FOR ANY PARTICULAR PURPOSE. 

I use TcHmiResponsiveNavigator NuGet package to have a responsive nice menù.
I add some contents to show different topics regarding HMI.

List of content.
================

* Overview: Overview.content: sample of Beckhoff.TwinCAT.HMI.PDFViewer, view of PDF tutorial for Bekhoff.TwinCAT.HMI.ResponsiveNavigation

* Submenu:
  * Sample menu:
    * Lateral menù, Lateralmenu.content, shiftted content with JQuery animation.
    * TabMenu, TabMenu.content, user control to create a tab to switch among the contents.
    * Other menus, OtherMenus.content.
  * Insert Data:
    * SimpleData, SimpleData.content, simple data entry of a variable.
    * Array, Array.content, how to navigate among indexed variables or structures.
    * Settings, Settings.content, user control to insert a single structured parameter.
    * DataGrid, DataGrid.content, see the video tutorial: Data entry by Data Grid list of parameters. Checking of min/max/isNaN. 
  * Dialog:
    * Dialog message, Dialog.content, Two ways for dialog message box or pop-up message.
  * P&I Diagram: the diagram is a SVG with attribute preserveAspectRatio="none" so the diagram can fit to many aspect ratios. The SVG code is hosted in a HTML_host control. Then there are two popup windows linked to two elements: valve and compressor. Valve and compressor are two little SVG image embedded in a HTML Host as well. The position of the two element is relative to the parent so they are always in the same position related to main P&I Diagram.

* Submenu2:
  * User Managment
    * LogOut, UserManager.content.
  * EventGrid
    * EventGrid Sample, EventGridSample.content.
* Documentation:
  * Beckhoff
  * Friends
    * GitHub, all repository with TcHMI interesting project  

* Features
  * RPC, Remote Procedure Call, PLC FB method calling by TcHMI framework. Read/Write FB Property.
  * Animation
    * animation methods of TcHMI framework
    * javascript function binding to change a control property
  
* Third Party Controls
  * ChartsJS radar and doughnut samples.
    

