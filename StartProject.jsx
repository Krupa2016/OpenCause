import React, { useState } from "react";

const StartProject = () => {
  const [formData, setFormData] = useState({
    title: "", // Added title field
    region: "",
    zipcode: "",
    reason: "",
    instagramHandle: "",
    description: "",
    files: [],
    totalMoney: "",
    deadline: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      files: e.target.files,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (API call or form processing)
    console.log(formData);
  };

  return (
    <div className="start-funding-container">
      <form className="start-funding-form" onSubmit={handleSubmit}>
        <h2>Start Your Fundraising Campaign</h2>

        {/* Title */}
        <label>Title of Campaign</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Enter campaign title"
          required
        />

        {/* Region */}
        <label>Region</label>
        <select
          name="region"
          value={formData.region}
          onChange={handleChange}
          required
        >
          <option value="">Select a Region</option>
          <option value="India">India</option>
          <option value="North Africa">North Africa</option>
          <option value="USA">USA</option>
          <option value="Canada">Canada</option>
        </select>

        {/* Zipcode */}
        <label>Zipcode</label>
        <input
          type="text"
          name="zipcode"
          value={formData.zipcode}
          onChange={handleChange}
          required
        />

        {/* Reason for Fundraising */}
        <label>Reason for Fundraising</label>
        <select
          name="reason"
          value={formData.reason}
          onChange={handleChange}
          required
        >
          <option value="">Select a Reason</option>
          <option value="Education">Education</option>
          <option value="Medical">Medical</option>
          <option value="Charity">Charity</option>
          <option value="Business">Business</option>
          <option value="Other">Other</option>
        </select>

        {/* Instagram Handle */}
        <label>Social Media Handle</label>
        <input
          type="text"
          name="instagramHandle"
          value={formData.instagramHandle}
          onChange={handleChange}
          placeholder="@username"
          required
        />

        {/* Description of the Issue */}
        <div className="textarea-container">
          <label>Description of the Issue</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Describe the issue and how the funds will help..."
            required
          />
        </div>

        {/* Total Money Required */}
        <label>Total Money Required</label>
        <input
          type="number"
          name="totalMoney"
          value={formData.totalMoney}
          onChange={handleChange}
          placeholder="Enter total amount"
          required
        />

        {/* Deadline */}
        <label>Deadline</label>
        <input
          type="date"
          name="deadline"
          value={formData.deadline}
          onChange={handleChange}
          required
        />

        {/* Image/Video Upload */}
        <div className="file-upload-container">
          <label>Upload Images/Videos</label>
          <input
            type="file"
            name="files"
            accept="image/*,video/*"
            multiple
            onChange={handleFileChange}
            required
          />
        </div>

        {/* Submit Button */}
        <button className="submit-btn" type="submit">
          Start Fundraising
        </button>
      </form>
    </div>
  );
};

export default StartProject;
