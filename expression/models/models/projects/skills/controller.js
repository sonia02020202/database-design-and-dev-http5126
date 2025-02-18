const Project = require("../models/Project");
const Skill = require("../models/Skill");

// Render Add Project Page
exports.showAddProjectForm = (req, res) => {
  res.render("admin/addProject");
};

// Render Add Skill Page
exports.showAddSkillForm = (req, res) => {
  res.render("admin/addSkill");
};

// Handle Adding a Project
exports.addProject = async (req, res) => {
  try {
    await Project.create(req.body);
    res.redirect("/admin/projects/add");
  } catch (error) {
    res.status(500).send("Error adding project");
  }
};

// Handle Adding a Skill
exports.addSkill = async (req, res) => {
  try {
    await Skill.create(req.body);
    res.redirect("/admin/skills/add");
  } catch (error) {
    res.status(500).send("Error adding skill");
  }
};

// API - Get All Projects
exports.getProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (error) {
    res.status(500).send("Error fetching projects");
  }
};

// API - Get All Skills
exports.getSkills = async (req, res) => {
  try {
    const skills = await Skill.find();
    res.json(skills);
  } catch (error) {
    res.status(500).send("Error fetching skills");
  }
};
