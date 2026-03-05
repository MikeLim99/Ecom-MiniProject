import Mongoose from 'mongoose'

const generateSku = () => {
    
    const randomPart = new Mongoose.Types.ObjectId().toString().slice(-6).toUpperCase();
    return `SKU-${randomPart}`;
};

const ProductSchema = new Mongoose.Schema({
    SKU: {
        type: String,
        required: true,
        unique: true,
    },
    productName: {
        type: String,
        required: true
    },
    productDescription: {
        type: String
    },
    price: {
        type: Number,
        min: 0,
        required: true
    },
    category: {
        type: String,
        enum: ['laptop', 'phone', 'accessories', 'desktop'],
        required: true
    },
    discount: {
        type: Number,
        min: 0,
        max: 100,
        default: 0
    },
    stock: {
        type: Number,
        required: true,
        min: 0
    },
    productImage: {
        type: String
    },
    featuredDisplay: {
        type: Boolean,
        default: false
    },
    reviews: [
        {
            userId: {
                type: Mongoose.Schema.Types.ObjectId,
                ref: 'User',
                required: true
            },
            rating: {
                type: Number,
                required: true,
                min: 1,
                max: 5
            },
            comment: {
                type: String
            }
        }
    ]
}, { timestamps: true });

ProductSchema.pre('validate', async function () {
    if (!this.isNew || this.SKU) {
        return;
    }

    let exists = true;

    while (exists) {
        const candidate = generateSku();
        exists = await this.constructor.exists({ SKU: candidate });

        if (!exists) {
            this.SKU = candidate;
        }
    }
});

const ProductModel = Mongoose.model('Product', ProductSchema);

export default ProductModel