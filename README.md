# API Endpoints

## User

| Method | API Endpoint |
|---------|---------------|
| POST | /register
| POST | /login |
| POST | /upload-picture |
| GET | /user/preferences |
| PUT| /user/preferences |
| GET | /user/preferences/master |
| POST | /add-friends/contants |
| POST | /add-friends/manually |
| POST | /accept/friend-request |
| GET | /friends |
| GET | /friends/id |

## Inbox and Notifications

| Method | API Endpoint |
|---------|---------------|
| POST | /inbox |
| POST | /inbox/friend-request-accept |
| GET | /notifications |
| POST | /mark-read/notifications |

## Trips

| Method | API Endpoint |
|---------|---------------|
| GET | /trips |
| GET | /trips/preference-options |
| PATCH | /trip |
| POST | /trip/member |
| POST | /trips/accept/friend |
| GET | /trip/preference/master |
| GET | /trip/dashboard |
| POST | /suggest/place-to-trip |

## Explore

| Method | API Endpoint |
|---------|---------------|
| GET | /explore/friends |
| GET | /explore/suggested |
| GET | /explore/popular |
| POST | /explore/search |

## Cities and Places

| Method | API Endpoint |
|---------|---------------|
| GET | /cities/schedule |
| GET | /cities/id/hotels |
| GET | /cities/id/must-list |
| GET | /places?saved&type=hotel |

## Posts and Comments

| Method | API Endpoint |
|---------|---------------|
| GET | /posts/comments |
| POST | /comments |

## Events

| Method | API Endpoint |
|---------|---------------|
| GET | /events |
| POST | /listeners |
| GET | /event/idea-board |
| GET | /events/suggestion |
| POST | /event/attachments |

## Other

| Method | API Endpoint |
|---------|---------------|
| GET | /polls |
| POST | /vote |
| DELETE | /vote |
| POST | /write/category |
