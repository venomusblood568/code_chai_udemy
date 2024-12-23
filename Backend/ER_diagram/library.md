users[icon:user]{
  _id sting pk
  username string
  email string 
  password string
  age number
  gender string
  address string
  createdAt Date
  updateAt Date
}
books[icon:book]{
  _id sting pk
  name string
  author_name string
  publisher_name string
}
category[icon:book-open, typeface: rough]{
 _id sting pk
 name string
 total_book string
 books Objectid[] books
}
library[icon:library]{
  _id string pk
  address sting
  total_book number
  cat_num number
  borrowed number
}

users._id > library._id
library._id < category._id
category._id <> books._id
