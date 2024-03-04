from django.db import models

# Create your models here.
from django.db import models

class Comment(models.Model):
    id = models.AutoField(primary_key=True)
    user = models.CharField(max_length=100)
    comment = models.TextField()

    def __str__(self):
        return f"Comment by {self.user}"

class Post(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=255)
    description = models.TextField()
    image = models.URLField()
    likes = models.IntegerField(default=0)
    shares = models.IntegerField(default=0)
    comments = models.ManyToManyField(Comment, related_name='post_comments', blank=True)

    def __str__(self):
        return self.title
