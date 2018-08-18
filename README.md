# NewsApp
Displays news headlines with redirection to the source 

# Front End Code:
Front End code is written in ReactJS.
* It uses react data table to display the data.
* Filtering is applied on the individual columns.
* Rows are clickable and redirect to the URL of the medium.
* Pagination is done on the client side since data is limited. However it should be done on the backkend with large data.
* Axios is used for communicating with Backend server.


# Backend Code:
* Backend code is written in Spring Boot with Elastic search as the data store.
* The script used for reading the csv and dumping the data to elastic is added.
![alt text](https://github.com/SuperMohit/NewsApp/blob/master/ui.png)

## Filtering : Textbox in the columns for filtering data.
![alt text](https://github.com/SuperMohit/NewsApp/blob/master/filter.png)

## Elastic Index
![alt text](https://github.com/SuperMohit/NewsApp/blob/master/elastic.png)


