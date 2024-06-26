package project.Quiz_Game.app.questions.action;

import org.springframework.stereotype.Service;
import org.springframework.web.context.annotation.RequestScope;
import project.Quiz_Game.app.questions.service.GetQuestionService;
import project.Quiz_Game.app.trivia.dto.TriviaQuestion;

import java.util.List;

@Service
@RequestScope
public class GetQuestionsAction {

    private final GetQuestionService getQuestionService;


    public GetQuestionsAction(GetQuestionService getQuestionService) {
        this.getQuestionService = getQuestionService;
    }

    public List<TriviaQuestion> execute(int amount) {
        return getQuestionService.execute(amount);
    }
}
