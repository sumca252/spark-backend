# Schema Types

<details>
  <summary><strong>Table of Contents</strong></summary>

  * [Query](#query)
  * [Mutation](#mutation)
  * [Objects](#objects)
    * [Account](#account)
    * [City](#city)
    * [Customer](#customer)
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
<td colspan="2" valign="top"><strong>createUser</strong></td>
<td valign="top"><a href="#user">User</a></td>
<td>

Add a user to the database

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first_name</td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">last_name</td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">password</td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">email</td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">phone</td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">role_id</td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>updateUserById</strong></td>
<td valign="top"><a href="#user">User</a></td>
<td>

Update a user in the database

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first_name</td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">last_name</td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">password</td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">email</td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">phone</td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">role_id</td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
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
<td colspan="2" valign="top"><strong>running</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

The running status of the scooter

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>speed</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

The speed of the scooter

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
<td colspan="2" valign="top"><strong>city_id</strong></td>
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
<td colspan="2" valign="top"><strong>scooter_id</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

The scooter of the station

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
