# Schema Types

<details>
  <summary><strong>Table of Contents</strong></summary>

  * [Query](#query)
  * [Mutation](#mutation)
  * [Objects](#objects)
    * [Account](#account)
    * [City](#city)
    * [Customer](#customer)
    * [Logs](#logs)
    * [Payment](#payment)
    * [Price](#price)
    * [Role](#role)
    * [Scooter](#scooter)
    * [Station](#station)
    * [Status](#status)
    * [User](#user)
    * [Zone](#zone)
  * [Scalars](#scalars)
    * [Boolean](#boolean)
    * [String](#string)

</details>

## Query
Root Query for the application

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>getAllRoles</strong></td>
<td valign="top">[<a href="#role">Role</a>]</td>
<td>

List of all Roles

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>getRoleById</strong></td>
<td valign="top">[<a href="#role">Role</a>]</td>
<td>

A single Role by id

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>getAllAdmins</strong></td>
<td valign="top">[<a href="#user">User</a>]</td>
<td>

List of all Admins

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>getAllUsers</strong></td>
<td valign="top">[<a href="#user">User</a>]</td>
<td>

List of all Users

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>getUserById</strong></td>
<td valign="top">[<a href="#user">User</a>]</td>
<td>

A single User by id

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>getUserByEmail</strong></td>
<td valign="top">[<a href="#user">User</a>]</td>
<td>

A single User by email

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">email</td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>getUserByUsernameOrEmail</strong></td>
<td valign="top">[<a href="#user">User</a>]</td>
<td>

A single User by username

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">username</td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>getAllCustomers</strong></td>
<td valign="top">[<a href="#customer">Customer</a>]</td>
<td>

List of all Customers

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>getCustomerById</strong></td>
<td valign="top">[<a href="#customer">Customer</a>]</td>
<td>

A single Customer by id

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>getCustomerByEmail</strong></td>
<td valign="top">[<a href="#customer">Customer</a>]</td>
<td>

A single Customer by email

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">email</td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>getAllAccounts</strong></td>
<td valign="top">[<a href="#account">Account</a>]</td>
<td>

List of all Accounts

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>getAccountByCustomerId</strong></td>
<td valign="top">[<a href="#account">Account</a>]</td>
<td>

A single Account by customer id

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>getAllStatuses</strong></td>
<td valign="top">[<a href="#status">Status</a>]</td>
<td>

List of all Statuses

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>getStatusById</strong></td>
<td valign="top">[<a href="#status">Status</a>]</td>
<td>

A single Status by id

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>getAllPrices</strong></td>
<td valign="top">[<a href="#price">Price</a>]</td>
<td>

List of all Prices

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>getPriceById</strong></td>
<td valign="top">[<a href="#price">Price</a>]</td>
<td>

A single Price by id

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>getAllScooters</strong></td>
<td valign="top">[<a href="#scooter">Scooter</a>]</td>
<td>

List of all Scooters

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>getAllScooterInCityByCityId</strong></td>
<td valign="top">[<a href="#scooter">Scooter</a>]</td>
<td>

List of all Scooters in a city by city id

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>getAllScooterInStationByStationId</strong></td>
<td valign="top">[<a href="#scooter">Scooter</a>]</td>
<td>

List of all Scooters in a station by station id

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>getScooterById</strong></td>
<td valign="top">[<a href="#scooter">Scooter</a>]</td>
<td>

A single Scooter by id

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>getAllZones</strong></td>
<td valign="top">[<a href="#zone">Zone</a>]</td>
<td>

List of all Zones

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>getZoneById</strong></td>
<td valign="top">[<a href="#zone">Zone</a>]</td>
<td>

A single Zone by id

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>getAllCities</strong></td>
<td valign="top">[<a href="#city">City</a>]</td>
<td>

List of all Cities

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>getCityById</strong></td>
<td valign="top">[<a href="#city">City</a>]</td>
<td>

A single City by id

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>getCityByScooterId</strong></td>
<td valign="top">[<a href="#city">City</a>]</td>
<td>

A single City by scooter id

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>getAllStations</strong></td>
<td valign="top">[<a href="#station">Station</a>]</td>
<td>

List of all Stations

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>getStationById</strong></td>
<td valign="top">[<a href="#station">Station</a>]</td>
<td>

A single Station by id

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>getStationByZoneType</strong></td>
<td valign="top">[<a href="#station">Station</a>]</td>
<td>

Stations by zone type

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">zone_type</td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>getStationByCityIdAndZoneId</strong></td>
<td valign="top">[<a href="#station">Station</a>]</td>
<td>

A single Station by city id and zone id

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">cityId</td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">zoneId</td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>getAllLogs</strong></td>
<td valign="top">[<a href="#logs">Logs</a>]</td>
<td>

List of all Logs

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>getLogById</strong></td>
<td valign="top">[<a href="#logs">Logs</a>]</td>
<td>

A single Log by id

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>getLogByCustomerId</strong></td>
<td valign="top">[<a href="#logs">Logs</a>]</td>
<td>

A single Log by customer id

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">customerId</td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>getAllPayments</strong></td>
<td valign="top">[<a href="#payment">Payment</a>]</td>
<td>

List of all Payments

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>getPaymentByCustomerId</strong></td>
<td valign="top">[<a href="#payment">Payment</a>]</td>
<td>

A List of Payments by customer id

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">customerId</td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
</tbody>
</table>

## Mutation
Root Mutation for the application

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>addCity</strong></td>
<td valign="top"><a href="#city">City</a></td>
<td>

Add a city to the database

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">name</td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

Name of the city

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">country</td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

Country of the city

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">longitude</td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

Longitude of the city

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">latitude</td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

Latitude of the city

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">area</td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

Area of the city

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>updateCityById</strong></td>
<td valign="top"><a href="#city">City</a></td>
<td>

Update a city in the database by id

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">name</td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">country</td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">longitude</td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">latitude</td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>addStation</strong></td>
<td valign="top"><a href="#station">Station</a></td>
<td>

Add a station to the database

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">name</td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">zone_id</td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">longitude</td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">latitude</td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">city_id</td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>updateStationById</strong></td>
<td valign="top"><a href="#station">Station</a></td>
<td>

Update a station in the database by id

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">name</td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">zone_id</td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">longitude</td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">latitude</td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">city_id</td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>addZone</strong></td>
<td valign="top"><a href="#zone">Zone</a></td>
<td>

Add a zone to the database

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">type</td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>updateZoneById</strong></td>
<td valign="top"><a href="#zone">Zone</a></td>
<td>

Update a zone in the database by id

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">type</td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>addScooter</strong></td>
<td valign="top"><a href="#scooter">Scooter</a></td>
<td>

Add a scooter to the database

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">battery</td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">status_id</td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">longitude</td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">latitude</td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">price_id</td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">speed</td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">station_id</td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>updateScooterById</strong></td>
<td valign="top"><a href="#scooter">Scooter</a></td>
<td>

Update a scooter in the database by id

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">battery</td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">status_id</td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">longitude</td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">latitude</td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">price_id</td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">speed</td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">station_id</td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>deleteScooterById</strong></td>
<td valign="top"><a href="#scooter">Scooter</a></td>
<td>

Delete a scooter in the database by id

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>rentScooter</strong></td>
<td valign="top"><a href="#scooter">Scooter</a></td>
<td>

Rent a scooter in the database

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

Id of the scooter

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">user_id</td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

Id of the user

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">longitude</td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

Longitude of the scooter

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">latitude</td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

Latitude of the scooter

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>returnScooter</strong></td>
<td valign="top"><a href="#scooter">Scooter</a></td>
<td>

Return a scooter in the database

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

Id of the scooter

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">user_id</td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

Id of the user

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">longitude</td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

Longitude of the scooter

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">latitude</td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

Latitude of the scooter

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">distance</td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

travelled distance for calculating total price

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>createUser</strong></td>
<td valign="top"><a href="#user">User</a></td>
<td>

Add a new user to the database

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first_name</td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

First name of the user

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">last_name</td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

Last name of the user

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">username</td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

Username of the user

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">password</td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

Password of the user

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">email</td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

Email of the user

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">phone</td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

Phone number of the user

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">role_id</td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

Role of the user (1 = admin, 2 = customer)

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>updateUserById</strong></td>
<td valign="top"><a href="#user">User</a></td>
<td>

Update a user in the database by id

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

Id of the user

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first_name</td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

First name of the user

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">last_name</td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

Last name of the user

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">username</td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

Username of the user

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">password</td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

Password of the user

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">email</td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

Email of the user

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">phone</td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

Phone number of the user

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">role_id</td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

Role of the user (1 = admin, 2 = customer)

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>createLog</strong></td>
<td valign="top"><a href="#logs">Logs</a></td>
<td>

Add a new log to the database

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">start_longitude</td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">start_latitude</td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">customer_id</td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">price_id</td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">scooter_id</td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>updateLogByLogId</strong></td>
<td valign="top"><a href="#logs">Logs</a></td>
<td>

Update a log in the database by log id

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">end_time</td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">end_longitude</td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">end_latitude</td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>updatePaymentMethodByCustomerId</strong></td>
<td valign="top"><a href="#account">Account</a></td>
<td>

Change the payment method of an account by customer id

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">customer_id</td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

The id of the customer

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">payment_method</td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

The type of payment method to change to

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>AddMoneyToAccountByCustomerId</strong></td>
<td valign="top"><a href="#account">Account</a></td>
<td>

Add money to an account by customer id

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">customer_id</td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

The id of the customer

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">balance</td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

The amount of money to add to the account

</td>
</tr>
</tbody>
</table>

## Objects

### Account

This represents an Account

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

The id of the account

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>customer</strong></td>
<td valign="top"><a href="#customer">Customer</a></td>
<td>

Account's customer

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>balance</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

The balance of the account

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>payment_method</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

The payment method of the account

</td>
</tr>
</tbody>
</table>

### City

This represents a City

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

The id of the city

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

The name of the city

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>country</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

The country where the city is located

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>longitude</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

The longitude of the city

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>latitude</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

The latitude of the city

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>area</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

The area of the city

</td>
</tr>
</tbody>
</table>

### Customer

This represents a Customer

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

The id of the customer

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>user</strong></td>
<td valign="top"><a href="#user">User</a></td>
<td>

Customer's user

</td>
</tr>
</tbody>
</table>

### Logs

This represents a Log of a User

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

The id of the log

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>start_time</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>end_time</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>start_longitude</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>end_longitude</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>start_latitude</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>end_latitude</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>customer_id</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>customer_name</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>start_cost</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>travel_cost</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>parking_cost</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>scooter_id</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### Payment

This represents a Payment of a User

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

The id of the payment

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>payment_method</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

The payment method used

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>account_id</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

The account id of the customer

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>customer_id</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

The customer id of the payment

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>customer_name</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

The full name of the customer

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>email</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

The email of the customer

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>total</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

The total amount paid

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>date</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

The date of the payment

</td>
</tr>
</tbody>
</table>

### Price

This represents a Price

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

The id of the price

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>start_cost</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

The start cost of the price

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>travel_cost</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

The travel cost of the price

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>parking_cost</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

The parking cost of the price

</td>
</tr>
</tbody>
</table>

### Role

This represents a Role of a User

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

The id of the role

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>role</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

The role of the user

</td>
</tr>
</tbody>
</table>

### Scooter

This represents a Scooter

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

The id of the scooter

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>battery</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

The battery level of the scooter

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>status</strong></td>
<td valign="top"><a href="#status">Status</a></td>
<td>

The status of the scooter

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>longitude</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

The longitude of the scooter

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>latitude</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

The latitude of the scooter

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>price</strong></td>
<td valign="top"><a href="#price">Price</a></td>
<td>

The price for renting the scooter

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>speed</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

The speed of the scooter

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>station</strong></td>
<td valign="top"><a href="#station">Station</a></td>
<td>

The station where the scooter is located

</td>
</tr>
</tbody>
</table>

### Station

This represents a Station

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

The id of the station

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>station_name</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

The name of the station

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>city_name</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

The city where the station is located

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>zone_type</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

The zone of the station

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>longitude</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

The longitude of the station

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>latitude</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

The latitude of the station

</td>
</tr>
</tbody>
</table>

### Status

This represents a Status

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

The id of the status

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>status</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

The status of the scooter

</td>
</tr>
</tbody>
</table>

### User

This represents a User of the application

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

The id of the user

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>first_name</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

The first name of the user

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>last_name</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

The last name of the user

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>username</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

The username of the user

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>password</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

The hashed password of the user

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>email</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

The email of the user

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>phone</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

The phone number of the user

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>role</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

The role of the user

</td>
</tr>
</tbody>
</table>

### Zone

This represents a Zone of a Station

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

The id of the zone

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>type</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

The type of the zone

</td>
</tr>
</tbody>
</table>

## Scalars

### Boolean

The `Boolean` scalar type represents `true` or `false`.

### String

The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.

