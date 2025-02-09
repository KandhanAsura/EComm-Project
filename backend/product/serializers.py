from rest_framework import serializers
from .models import Product

# class ProductListSerializer(serializers.ListSerializer):
#     def create(self, validated_data):
#         products = [Product(**item) for item in validated_data]
#         return Product.objects.bulk_create(products)


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        # fields = [{'id', 'name', 'description', 'price', 'stock','productImage'}]
        fields = '__all__'
        # list_serializer_class = ProductListSerializer




# class OrderSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Order
#         fields = ['id', 'user', 'product', 'quantity', 'date_ordered']
