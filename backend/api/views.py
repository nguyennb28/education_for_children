from rest_framework import viewsets
from .models import User, Chapter, Lesson, Question, AnswerOption, UserProgress
from .serializers import (
    UserSerializer,
    ChapterSerializer,
    LessonSerializer,
    QuestionSerializer,
    AnswerOptionSerializer,
    UserProgressSerializer,
)
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import action
from rest_framework.response import Response


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def get_permissions(self):
        if self.action == "create":
            return [AllowAny()]
        return [IsAuthenticated()]

    @action(detail=False, methods=["get"], permission_classes=[IsAuthenticated])
    def me(self, request):
        serializer = self.get_serializer(request.user)
        return Response(serializer.data)


class ChapterViewSet(viewsets.ModelViewSet):
    queryset = Chapter.objects.all()
    serializer_class = ChapterSerializer
    permission_classes = [IsAuthenticated]


class LessonViewSet(viewsets.ModelViewSet):
    queryset = Lesson.objects.all()
    serializer_class = LessonSerializer
    permission_classes = [IsAuthenticated]


class QuestionViewSet(viewsets.ModelViewSet):
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer
    permission_classes = [IsAuthenticated]

    @action(
        detail=False,
        methods=["get"],
        permission_classes=[IsAuthenticated],
        url_path="by_lesson/(?P<lesson_id>\d+)",
    )
    def lesson_questions(self, request, lesson_id=None):
        questions = self.get_queryset().filter(lesson_id=lesson_id)
        serializer = self.get_serializer(questions, many=True)
        return Response(serializer.data)


class AnswerOptionViewSet(viewsets.ModelViewSet):
    queryset = AnswerOption.objects.all()
    serializer_class = AnswerOptionSerializer
    permission_classes = [IsAuthenticated]


class UserProgressViewSet(viewsets.ModelViewSet):
    queryset = UserProgress.objects.all()
    serializer_class = UserProgressSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return UserProgress.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

    @action(detail=False, methods=["get"])
    def by_lesson(self, request):
        lesson_id = request.query_params.get("lesson_id")
        if not lesson_id:
            return Response({"error": "Thiếu lesson_id"}, status=400)
        progress = self.get_queryset().filter(lesson_id=lesson_id).first()
        if not progress:
            return Response({"detail": "Không tìm thấy"}, status=404)

        serializer = self.get_serializer(progress)
        return Response(serializer.data)
