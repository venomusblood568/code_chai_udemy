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