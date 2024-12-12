export const mistakeQuestion = async (req, res) => {
    if (req.isAuthenticated()) {
        try {
            const { mistakeId } = req.body; 

            
            if (typeof mistakeId !== "number") {
                return res.status(400).json({ error: "Invalid mistake ID" });
            }

            // Updatni ten mistakes usera
            req.user.mistakes.push(mistakeId);
            await req.user.save();

            res.json({ message: "Mistake recorded", mistakes: req.user.mistakes });
        } catch (err) {
            console.error("Error recording mistake:", err);
            res.status(500).json({ error: "Internal server error" });
        }
    } else {
        res.status(401).json({ error: "Not authenticated" });
    }
};

export const validQuestion = async (req, res) => {
    if (req.isAuthenticated()) {
        try {
            const { questionId } = req.body; 

            
            if (typeof questionId !== "number") {
                return res.status(400).json({ error: "Invalid question ID" });
            }

            // Updatni ty correctanswers usera
            req.user.correctAnswers.push(questionId);
            await req.user.save();

            res.json({
                message: "Correct answer recorded",
                correctAnswers: req.user.correctAnswers,
            });
        } catch (err) {
            console.error("Error recording correct answer:", err);
            res.status(500).json({ error: "Internal server error" });
        }
    } else {
        res.status(401).json({ error: "Not authenticated" });
    }
};
