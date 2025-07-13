from django.core.management.base import BaseCommand
from products.models import Category, Product

class Command(BaseCommand):
    help = 'Populate database with sample data'

    def handle(self, *args, **options):
        self.stdout.write('Creating categories...')
        
        # Создаем категории
        categories_data = [
            {'name': 'Иммунитет', 'description': 'Средства для укрепления иммунной системы'},
            {'name': 'Энергия', 'description': 'Препараты для повышения энергии и выносливости'},
            {'name': 'Красота', 'description': 'Средства для здоровья кожи, волос и ногтей'},
            {'name': 'Очищение', 'description': 'Детоксикация и очищение организма'},
            {'name': 'Здоровье', 'description': 'Общеукрепляющие средства'},
        ]
        
        categories = {}
        for cat_data in categories_data:
            category, created = Category.objects.get_or_create(
                name=cat_data['name'],
                defaults={'description': cat_data['description']}
            )
            categories[cat_data['name']] = category
            if created:
                self.stdout.write(f'Created category: {category.name}')
        
        self.stdout.write('Creating products...')
        
        # Создаем товары
        products_data = [
            {
                'name': 'Эпам-7 Иммунитет',
                'description': 'Натуральный комплекс для укрепления иммунитета',
                'price': 2890.00,
                'category': 'Иммунитет',
                'stock': 50,
                'rating': 4.8
            },
            {
                'name': 'Адаптовит Энергия',
                'description': 'Комплекс для повышения энергии и выносливости',
                'price': 3150.00,
                'category': 'Энергия',
                'stock': 30,
                'rating': 4.9
            },
            {
                'name': 'Новомин Красота',
                'description': 'Комплекс для здоровья кожи, волос и ногтей',
                'price': 2750.00,
                'category': 'Красота',
                'stock': 40,
                'rating': 4.7
            },
            {
                'name': 'Фиточай Детокс',
                'description': 'Натуральный травяной чай для очищения организма',
                'price': 1450.00,
                'category': 'Очищение',
                'stock': 100,
                'rating': 4.6
            },
            {
                'name': 'Омега-3 Премиум',
                'description': 'Высококачественные омега-3 жирные кислоты',
                'price': 3890.00,
                'category': 'Здоровье',
                'stock': 25,
                'rating': 4.9
            },
            {
                'name': 'Магний B6 Форте',
                'description': 'Комплекс для нервной системы и мышц',
                'price': 1890.00,
                'category': 'Здоровье',
                'stock': 0,
                'rating': 4.5
            }
        ]
        
        for prod_data in products_data:
            product, created = Product.objects.get_or_create(
                name=prod_data['name'],
                defaults={
                    'description': prod_data['description'],
                    'price': prod_data['price'],
                    'category': categories[prod_data['category']],
                    'stock': prod_data['stock'],
                    'rating': prod_data['rating'],
                    'is_active': True
                }
            )
            if created:
                self.stdout.write(f'Created product: {product.name}')
        
        self.stdout.write(self.style.SUCCESS('Database populated successfully!')) 