from django.db import models

# Create your models here.
# from django.db import models

class Product(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    stock = models.IntegerField()
    productImage = models.TextField()

# class Order(models.Model):
#     user = models.ForeignKey('auth.User', on_delete=models.CASCADE)
#     product = models.ForeignKey(Product, on_delete=models.CASCADE)
#     quantity = models.IntegerField()
#     date_ordered = models.DateTimeField(auto_now_add=True)
