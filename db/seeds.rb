# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#

airlines = Airline.create([
    {
        name: 'Amazing Airlines',
        image_url: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAflBMVEX///8AAAD4+Pj8/Pzc3NzOzs7i4uLKysqvr6/X19eIiIj6+vqpqanBwcF6enq+vr7r6+vz8/OBgYGTk5NSUlJISEiioqLS0tIjIyOampoWFhY1NTU8PDwdHR2tra1ubm5DQ0NaWlouLi50dHQMDAxmZmZXV1eFhYUpKSkxMTEGU0jeAAAFB0lEQVR4nO3ciXqyOhAGYDfWKqIIihtFSm3v/wYPak/rrwGyTCDt870XAJkWk0xmYDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPjVXmxvbVlru+9x6LCYTYv48Da8eYvT2ajvIRGyk3LIcAiO4Z8I03tnhfflI0smvz3KWUN8X1Hmx0kfIwut+TQKsrIssyCazh3Z2aE1wJvSDUmH3yx0/R3ziZqux8IX44ywslnOu4hyMVtumobxnk7EonzlD7ES+5ben6WVbdtHsfM9gUt6QhFWtrm2B3acfPCOYu/yX3YuGuKF79D/K0NfbAzJC++Vrbf2qzGUU9KtT7gUHsFmxn3xlVSI1aOydLj/js3sQGoAPvcNEskQK7m7UI8vk717wn2PCfdPnGEfTVT+lRPmnpFPzH+bF7nH5H+fgSP5r/Sk/38XO5GlUWpOvbOVeV4nudpNS6G7LWLFGKvnNRGaX1XjGw6nQhEOBpFyiJf9xppzqfSU4xu+CT81FseWqd2p4EifPYX55VsqGuBgMMoJ7nuRzxunV5sivuGneICVKcWtr1bHuv0rTXzDoeT+eHKiuf3FijXz2AXR1bk3bY8Ul8YH1Xbgn6uHZFcXnUfvqS6NDw4/6dxCfH9dh3/DxhKK5cXtDv66mnkWgvlRE7UAK4Rj+XI6R3JpGpNAAlzHoRuNBpZ6gNUjJZs16neiOkZJ+46kRkaUdlfWJJs4aiqrxJMR0eaD0Ib6/J1uE0cjII6v4hFu4pRtpTdqTUZU20h1hfqhF5vbd2Q3B0dTfBWbehMn4yxedRIwPvcdXyxSi5HSXkjVimAb2ipUP4mTFtBtYhpRnMTJWHVXY+8l3fjQsgTW6SHdUE50RXWcbvg9dLpYjV0EtIou2z9+LPKO4it7aeK5Uiin8utwAmXwPrXHR3IOo0BzuhFr3GJzO+qLb29CfBV7ryc+I/5/N2O68/kfed+/v3+s6eNb9x3TPbup71ZKaVR3eUg+mQZGxTciz6P8fvZndY7UJ+GpriM0OY5KfxjDpvP8qJmd08Yn0gjbBcIa9dWq0/ydA3FSsTJq+avMDqTxZb2mRwwT2iMa+uXPdiP/+t6J3NH4grTFZhhRL39j967usF1FricYJ+kPcJuSFyBYRc5TkTq8L6Y5lBXET5c8vlH9D2hXplbr80LVZXcVzzUUkNp+QbvCbZrVKDuH9GS3Y9Y7YE9WKft1JsoGt1JXfYx7FozPs4cpnHKFKPQtf6HIOPbF/HskI8Itmq81+xN9OW2buZfxEBbvI93ZkfD7d5WArB66SbTW32/Iu0X57emXP6ZxTy0xrx1mR51UUx50nB05hP25XLLOsz+70/60Xg4HX7qbb3o7HKRN8upso26mT6YO5pvdtN/PaBC/KvJkryM7EkNfMLoTG1EbC7myKRmZ9u5BTiM9HXhnk2pHSi9PsyVm1VaomwxNqz1cUL5iYFbp/RtZx6/e5F2FTFb8ZJuY/JGshXKh07jS2CPFLygEpqx+Dcbyh9kb01aHOpLHhe/mNGa1kuhpPpg7ezKJHorGBB8U6pglEt/StMI0F5v3hOrVwL0Zn5CnUfSw/AWLQ63210Tyucl7Fx6NC+MhNaurTk7tCdVmaVpXj6yQ9QblttDwccT+hOlDT2Xwpz6VfONFr19Lxy76Kw/nM9uz1r/+08gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAL36Dy4xUGaHe04SAAAAAElFTkSuQmCC'
    },
    {
        name: 'Airstronauts',
        image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTpWMZUTbOADPpzFng9dqL4VjuuSFv6V2lh1A&usqp=CAU'
    }
])

reviews = Review.create([
    {
        title: 'Great Airline',
        description: 'I had a lovely time.',
        score: 5,
        airline: airlines.first
    },
    {
    title: 'Poor Experience',
    description: 'I had an awful time.',
    score: 1,
    airline: airlines.first
    }
])