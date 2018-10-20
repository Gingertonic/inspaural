module Api
  module V1
    class QuotesController < ApplicationController
      def index
        render :json => Quote.all
      end
    end
  end
end
