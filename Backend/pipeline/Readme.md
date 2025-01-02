# Learning Aggregation Pipeline 

data used -> https://gist.github.com/hiteshchoudhary/a80d86b50a5d9c591198a23d79e1e467

1. how many user are active?

> used on data.json

```
[
  {
    $match: {
      isActive: true
    }
  },
  {
    $count: "Active user count"
  }
]
```

2. What is the average age of all user ?

> used on data.json

```
[
  {
    $group:{
      _id:null,
      avgAge:{
        $avg:"$age"
      }
    }
  }
]
```

3. find the total number of males and females

> used on data.json

```
[
  {
    $group: {
      _id: "$gender",
      count: {
        $sum: 1,
      },
    },
  },
]
```

4. Which country has the highest number of registered user ?

> used on data.json

```
[
  {
    $group: {
      _id: "$company.location.country",
			userCount :{
        $sum:1
      }
    }
  },
  {
    $sort: {
      userCount: -1
    }
  },
  {$limit: 2}
]
```

> in userCount > -1 represents the desending order

5. List all the eye colour present in the collection

> used on data.json

```
[
  {
    $group: {
      _id: "$eyeColor",
    }  
  }
]
```

6. What is the avg number of tags per User?

> used on data.json

```
[
  {
    $unwind: "$tags"
  },
  {
    $group: {
      _id: "$_id",
      numberoftags:{
        $sum:1
      }
    }
  },{
    $group: {
      _id: null,
      avgNoTags:{
        $avg : "$numberoftags"
      }
    }
  }
]
```
> second method of same thing

```
[
  {
    $addFields: {
      numberOfTags: {
        $size:{$ifNull:["$tags",[]]}
      }
    }
  },
  {
    $group: {
      _id: null,
      avgOfTags : {$avg:"$numberOfTags"}
      
    }
  }
]

```
7. How many user have 'enim' as one of the tags

> used on data.json

```
[
  {
    $match: {
      tags: "enim"
    }
  },
  {
    $count: 'Data with enim tags'
  }
]
```

8. what are the name and age of inactive user and have "Velit" in tag?

> used in data.json

```
[
  {
    $match: {
      isActive: false,
      tags: "velit"
    }
  },
  {
    $project: {
      name: "$name", 
      age: "$age"
    }
  }
]

```
> in project you can use name:1 and age:1 which will give same result

9. how many user have a phone number starting with ‘+1(940)’?

> used on data.json

```
[
  {
    $match: {
      "company.phone": /^\+1 \(940\)/
    }
  },
  {
    $count: "userwithspecialNumber",
  }
]

```

10. who have registed the most recently

> used on json.data

```
[
  {
    $sort: {
      registered: -1
    }
  },
  {$limit: 2},
  {
    $project: {
      name:"$name",
      age:"$age",
    }
  }
]
```

11.  categorize the user based on their fav fruit

> used on data.json

```
[
  {
    $group: {
      _id: "$favoriteFruit",
      user:{$push:"$name"}
    }
  }
]
```

12. How many user have ‘ad’ as the second tag in their list of tags?

> used on data.json

```
[
  {
    $match: {
      "tags.1":"ad"
    }
  },{
    $count: 'User with ad tags'
  }
]
```

13. List all the companies located in USA with their corresponding user count

> used on data.json

```
[
  {
    $match: {
      "company.location.country":"USA"
    }
  },
  {
    $group: {
      _id: "$company.title",
      userCount:{
        $sum:1
      }
    }
  }
]
```

14. how to link two data base and fetch data from each other

> used on book.json and author.json

```
[
  {
    $lookup: {
      from: "author",
      localField: "author_id",
      foreignField: "_id",
      as: "author_details",
    },
  },
  {
    $addFields: {
      author_details: {
        $arrayElemAt: ["$author_details", 0],
      },
    },
  },
]
```