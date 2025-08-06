"use client"
import React, { useState, useTransition } from 'react';
import { Calendar, DollarSign, FileText, Tag, Plus, Loader2 } from 'lucide-react';
import addExpenseRecord from '@/app/actions/addExpenseRecord'; // Adjust the path if needed
  import { toast } from 'sonner';

const AddNewRecord= () => {
  const [isPending, startTransition] = useTransition();
  const [formData, setFormData] = useState({
    text: '',
    amount: '',
    category: '',
    date: new Date().toISOString().split('T')[0],
  });

  const categories = [
    'Food & Dining',
    'Transportation',
    'Shopping',
    'Entertainment',
    'Bills & Utilities',
    'Healthcare',
    'Travel',
    'Education',
    'Business',
    'Other',
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    if (!formData.text.trim()) return toast.error('Description is required');
    if (!formData.amount || parseFloat(formData.amount) <= 0) return toast.error('Please enter a valid amount');
    if (!formData.category) return toast.error('Please select a category');
    if (!formData.date) return toast.error('Date is required');
    return true;
  };
const handleSubmit = async () => {
  if (!validateForm()) return;

  startTransition(async () => {
    try {
      const formDataObj = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        formDataObj.append(key, value);
      });

      const result = await addExpenseRecord(formDataObj);
      if (result.error) {
        toast.error(result.error);
      } else {
        toast.success('Expense record added successfully!');
        setFormData({ text: '', amount: '', category: '', date: new Date().toISOString().split('T')[0] });
      }
    } catch {
      toast.error('An unexpected error occurred');
    }
  });
};


  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mb-4">
          <Plus className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Add New Expense</h2>
        <p className="text-gray-600">Track your spending with detailed expense records</p>
      </div>

      <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 border-b border-gray-100">
          <h3 className="text-xl font-semibold text-gray-800">Expense Details</h3>
          <p className="text-gray-600 text-sm mt-1">Fill in the information below</p>
        </div>

        <div className="p-6 space-y-6">
          <div className="space-y-2">
            <label className="flex items-center text-sm font-medium text-gray-700">
              <FileText className="w-4 h-4 mr-2 text-gray-500" /> Description
            </label>
            <input
              type="text"
              name="text"
              value={formData.text}
              onChange={handleInputChange}
              placeholder="Enter expense description..."
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 border-gray-300 focus:ring-blue-500"
            />
          </div>

          <div className="space-y-2">
            <label className="flex items-center text-sm font-medium text-gray-700">
              <DollarSign className="w-4 h-4 mr-2 text-gray-500" /> Amount
            </label>
            <div className="relative">
              <input
                type="number"
                name="amount"
                value={formData.amount}
                onChange={handleInputChange}
                placeholder="0.00"
                min="0"
                step="0.01"
                className="w-full px-4 py-3 pl-8 border rounded-lg focus:ring-2 border-gray-300 focus:ring-blue-500"
              />
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm"></div>
            </div>
          </div>

          <div className="space-y-2">
            <label className="flex items-center text-sm font-medium text-gray-700">
              <Tag className="w-4 h-4 mr-2 text-gray-500" /> Category
            </label>
            <select
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 border-gray-300 focus:ring-blue-500"
            >
              <option value="">Select a category</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <label className="flex items-center text-sm font-medium text-gray-700">
              <Calendar className="w-4 h-4 mr-2 text-gray-500" /> Date
            </label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 border-gray-300 focus:ring-blue-500"
            />
          </div>

          <div className="pt-4">
            <button
              type="button"
              onClick={handleSubmit}
              disabled={isPending}
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
            >
              {isPending ? (
                <div className="flex items-center justify-center">
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" /> Adding Expense...
                </div>
              ) : (
                <div className="flex items-center justify-center">
                  <Plus className="w-5 h-5 mr-2" /> Add Expense Record
                </div>
              )}
            </button>
          </div>
        </div>
      </div>

      <div className="text-center mt-6">
        <p className="text-gray-500 text-sm">
          All fields are required. Your expense will be saved to your personal records.
        </p>
      </div>
    </div>
  );
};

export default AddNewRecord;
