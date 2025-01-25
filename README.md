# Customer Visit Data Collection Form

## Overview
This project involves a dynamic web form designed for real-time data collection during customer visits. It eliminates the challenges associated with manual monthly data submissions, such as duplicate entries, missing critical fields, and inconsistent data submissions. By allowing field agents to input data on the spot, this form ensures better data integrity and helps the sales and marketing teams track customer status more effectively. The form is built using Google Apps Script, HTML, and JavaScript, and it integrates seamlessly with Google Sheets for real-time data storage and management.

## Problem Statement
Currently, field agents submit data via Excel sheets at the end of each month. This approach has several problems:
- Duplicate entries across various fields.
- Missing critical data fields required for effective sales and marketing strategies.
- Inconsistent data submission by agents.
- Difficulty in accurately tracking customers across different cities.

The proposed web form solves these issues by:
- Allowing real-time data entry during customer visits.
- Ensuring that all critical fields are filled in.
- Reducing manual errors through dependent dropdowns and validation.
- Streamlining data collection and maintaining data integrity.

## Field Descriptions
The form dynamically adjusts its fields based on user inputs. Below is a brief description of each section and its fields:

1. **Customer Type**
   - Allows the user to select between "New Customer" and "Existing Customer".

2. **New Customer Section**
   - **Customer Name** *(Required)*: Name of the new customer.
   - **Connected Person Designation**: The designation of the connected person (the person the FPR contacted is the owner of the business or manager etc ).
   - **Connected Person Name** *(Required)*: Name of the contact person.
   - **Connected Person Phone No** *(Required)*: Phone number of the contact person.
   - **Connection Email ID**: Email ID of the contact person.
   - **Locality**: Locality of the new customer.
   - **New State** *(Required)*: State where the customer is located.
   - **New City** *(Required)*: City where the customer is located.
   - **Segment of New Customer** *(Required)*: The business segment of the new customer (Retail, Wholesales, Institution, Market place Etc).

3. **Existing Customer Section**
   - **State** *(Required)*: State of the existing customer.
   - **City** *(Required)*: City of the existing customer.
   - **Segment** *(Required)*: Business segment of the customer.
   - **Customer Name** *(Required)*: Name of the existing customer.

4. **Customer Status**
   - **Business Status**: Current business status of the customer (is The Customer actively buying from the company or Not).
   - **Sub Status**: Sub-status provides additional details about the customer Negotiation.

5. **Direct or Indirect**
   - **Direct**: Direct interaction with the customer.
   - **Indirect**: Interaction via a distributor.
   - **Distributor Name** *(Required if Indirect)*: Name of the distributor (for indirect customers).

6. **FPR Details**
   - **FPR Name** *(Required)*: Name of the Field Personnel Representative (FPR).
   - **FPR Phone** *(Required)*: Phone number of the FPR.
   - **FPR Email ID**: Email ID of the FPR.

7. **Visit Details**
   - **Oil Type** *(Checkbox)*: Types of oil products discussed and the potential quantity they can buy.
   - **Status Remark for Oil**: Remarks regarding the oil products.
   - **Food Type** *(Checkbox)*: Types of food products discussed and the potential quantity they can buy.
   - **Status Remark for Food**: Remarks regarding the food products.

8. **Upload Image**
   - Allows the user to upload an image related to the visit.

9. **Submit**
   - Submits the form and updates the Google Sheets in real-time.

## Features Details
- **Dependent Dropdowns**: Fields like "State", "City", and "Segment" are dynamically populated based on user selections.
- **Real-time Data Updates**: Data entered in the form is automatically stored in a Google Sheets file with two tabs:
  - **Customer Info**: Contains master data about existing customers.
  - **Form Response**: Stores data collected from form submissions.
- **Dynamic Field Visibility**: Fields appear or hide based on previous selections, ensuring a clean and intuitive user interface.

## Flowchart
The following flowchart illustrates the dependencies between various fields and sections in the form:

![Customer Visit Data Collection Form Flowchart](https://github.com/SBOSE550/Market-Visit-Data-Collection-Form/blob/main/Customer%20Visit%20Data%20Collection%20Form%20Flowchart.jpg)


## Conclusion
This project significantly improves the data collection process by:
- Ensuring data integrity through dynamic field validation and dependent dropdowns.
- Streamlining the workflow for field agents, reducing manual errors.
- Providing real-time updates, enabling better decision-making for sales and marketing strategies.

This project also provided an excellent opportunity for me to learn and apply HTML, JavaScript, and Google Apps Script in a real-world scenario. It highlights my problem-solving skills and my ability to deliver a practical solution when faced with unexpected challenges.

### Next Steps
Future improvements could include:
- Adding user authentication for secure data submission.
- Basic error handling needs to be implemented to ensure that required fields are filled, and valid inputs are provided.
- Implementing offline data collection capabilities.
- Creating detailed reports and dashboards directly from the collected data.

## Related Links
- To read the blog explaining how to create a dependent dropdown without much coding knowledge, [Building a Dependent Dropdown Using Google Apps Script](https://medium.com/@soumyadeepbose550/building-a-dynamic-data-collection-form-using-google-apps-script-643e297d0d0c)
- To see the Web Form, [click here](https://youtu.be/g9sle_y2ChU?si=6V4SfNUGB4Hs3hd7).
- For the `Code.gs` script, [click here](https://github.com/SBOSE550/Customer-Visit-Data-Collection-Form/blob/main/Code.gs).
- To see `Index.html`, [click here](https://github.com/SBOSE550/Customer-Visit-Data-Collection-Form/blob/main/Index.html).  
  
