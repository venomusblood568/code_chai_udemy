todo[icon:list]{
  _id string pk
  content string
  complete boolean
  subtodo Objectid[] subtodo
  createBy Objectid[] users
  createdAt Date
  updateAt Date
}

user[icon:user]{
 _id string pk
 username string
 email string
 password string
}

subtodo[icon:list]{
  _id string pk
  content string
  complete boolean
  createBy Objectid[] users
  createdAt Date
  updateAt Date
}

user - subtodo
user - todo
todo > subtodo