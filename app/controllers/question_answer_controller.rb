class QuestionAnswerController < ApplicationController
    skip_before_action :verify_authenticity_token
    def createAnswer
        data = params[:q1]

        @answer = Answer.new(
            q1: params[:q1], q2: params[:q2], q3: params[:q3], q4: params[:q4], q5: params[:q5], q6: params[:q6], q7: params[:q7],
            q8: params[:q8], q9: params[:q9], q10: params[:q10], q11: params[:q11], q12: params[:q12], q13: params[:q13], q14: params[:q14],
            q15: params[:q15], q16: params[:q16], q17: params[:q17], q18: params[:q18], q19: params[:q19], q20: params[:q20], q21: params[:q21],
            q22: params[:q22], q23: params[:q23], q24: params[:q24], q25: params[:q25], q26: params[:q26], q27: params[:q27], q28: params[:q28],
            q29: params[:q29], q30: params[:q30], q31: params[:q31], q32: params[:q32], q33: params[:q33], q34: params[:q34], q35: params[:q35],
            q36: params[:q36], q37: params[:q37], q38: params[:q38], q39: params[:q39], q40: params[:q40], q41: params[:q41], q42: params[:q42],
            q43: params[:q43], q44: params[:q44], q45_1: params[:q45_1], q45_2: params[:q45_2], q45_3: params[:q45_3],
            q22_text: params[:q22_text], q23_text: params[:q23_text], q24_text: params[:q24_text],
            q25_text: params[:q25_text], q26_text: params[:q26_text]
        )
        
        if @answer.save
            render body: 'Thanks for answering the questions'
        else
            render body: 'false'
        end
    end

    def result
        # render 'generic/reuslt' 
        @answers = Answer.all
        @title = 'title'
    end

    def getQA
        @answer = Answer.all

        render json: { success: true, data: @answer }
    end
end
