movies[icon:film]{
  _id string pk
  name string
  movies Objectid categories
  rating number
  description string
}
web_series[icon:film]{
  _id string pk
  name string
  web_series Objectid categories
  rating number
  description string
  episode number
}
categories[icon:file]{
  _id string pk
  name string
  description string
  episode number
}
users[icon:user]{
  _id string pk
  username string
  email string 
  password string
  createdAt Date
  updateAt Date
}
users < categories._id
categories._id <> movies._id 
categories._id  <> web_series._id

 