const Content = require("../model/content");

exports.getContent = async (req, res) => {
  const content = await Content.find();
  res.status(200).send(content);
};

exports.getContentById = async (req, res) => {
  let id = req.params.contentId;

  const content = await Content.findById({ _id: id });
  res.status(200).send(content);
};

exports.addContent = async (req, res) => {
  const newContent = new Content(req.body);
  const saveContent = await newContent.save();
  res.status(200).send(saveContent);
};

exports.updateContent = (req, res) => {
  let id = req.params.contentId;
  Content.findByIdAndUpdate(
    { _id: id },
    { $set: req.body },
    { new: true },
    (err, content) => {
      if (err) {
        return res.status(400).json({
          error: "You can't update this Content",
        });
      }
      res.status(200).json(content);
    },
  );
};
