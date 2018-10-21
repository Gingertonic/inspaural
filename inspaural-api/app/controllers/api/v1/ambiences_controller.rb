module Api
  module V1
    class AmbiencesController < ApplicationController
      def index
        render :json => Ambience.all
      end
    end
  end
end
