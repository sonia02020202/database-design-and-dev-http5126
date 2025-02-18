const express = require("express");
const router = express.Router();
const Project = require("../models/Project");
const Skill = require("../models/Skill");

// Admin - Add Project Form
router.get("/projects/add", (req, res) => {
  res.render("admin/addProject");
});

// Admin - Add Skill Form
router.get("/skills/add", (req, res) => {
  res.render("admin/addSkill");
});

// Handle Project Submission
router.post("/projects/add", async (req, res) => {
  await Project.create(req.body);
  res.redirect("/admin/projects/add");
});

// Handle Skill Submission
router.post("/skills/add", async (req, res) => {
  await Skill.create(req.body);
  res.redirect("/admin/skills/add");
});

// API - Return Projects
router.get("/api/projects", async (req, res) => {
  const projects = await Project.find();
  res.json(projects);
});

// API - Return Skills
router.get("/api/skills", async (req, res) => {
  const skills = await Skill.find();
  res.json(skills);
});

module.exports = router;
