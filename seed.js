import mongoose from "mongoose";

import data from "./directory-1.js";

// normalize fields
const normalize = (o) => ({
  company_name: o.company_name,
  category: o.category,
  email: o.email ? o.email.split(",").map(e => e.trim()) : [],
  phone_mobile: o.phone_mobile ? o.phone_mobile.split(",").map(p => p.trim()) : [],
  web: o.web,
  address: o.address ? o.address.split(";").map(a => a.trim()) : []
});

// schema
const CompanySchema = new mongoose.Schema({
  company_name: String,
  category: String,
  email: [String],
  phone_mobile: [String],
  web: String,
  address: [String]
});

const Company = mongoose.model("Company", CompanySchema);

async function seed() {
  await mongoose.connect("mongodb://127.0.0.1:27017/companies_db");

  const docs = data.map(normalize);

  await Company.insertMany(docs);

  console.log("✅ Data inserted successfully");

  await mongoose.disconnect();
}

seed().catch(console.error);
