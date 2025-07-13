from rest_framework import serializers
from .models import Order, OrderItem
from products.serializers import ProductSerializer
from products.models import Product

class OrderItemSerializer(serializers.ModelSerializer):
    product = ProductSerializer(read_only=True)
    product_id = serializers.IntegerField(write_only=True)
    total_price = serializers.ReadOnlyField()

    class Meta:
        model = OrderItem
        fields = ['id', 'product', 'product_id', 'quantity', 'price', 'total_price']

class OrderSerializer(serializers.ModelSerializer):
    items = OrderItemSerializer(many=True, read_only=True)
    full_name = serializers.ReadOnlyField()

    class Meta:
        model = Order
        fields = [
            'id', 'first_name', 'last_name', 'email', 'phone', 
            'address', 'city', 'postal_code', 'country', 
            'status', 'total_amount', 'items', 'full_name', 
            'created_at', 'updated_at'
        ]
        read_only_fields = ['created_at', 'updated_at', 'total_amount']

class CreateOrderSerializer(serializers.ModelSerializer):
    items = OrderItemSerializer(many=True)

    class Meta:
        model = Order
        fields = [
            'first_name', 'last_name', 'email', 'phone', 
            'address', 'city', 'postal_code', 'country', 'items'
        ]

    def create(self, validated_data):
        items_data = validated_data.pop('items')
        order = Order.objects.create(**validated_data)
        
        total_amount = 0
        for item_data in items_data:
            product_id = item_data.pop('product_id')
            product = Product.objects.get(id=product_id)
            item_data['price'] = product.price
            OrderItem.objects.create(order=order, product=product, **item_data)
            total_amount += item_data['price'] * item_data['quantity']
        
        order.total_amount = total_amount
        order.save()
        
        return order 