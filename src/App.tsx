import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Heading,
  Icon,
  Image,
  SimpleGrid,
  Text,
  VStack,
  HStack,
  Badge,
  Separator,
  Card,
  Input,
  Stack,
} from "@chakra-ui/react"
import {
  LuQrCode,
  LuScanQrCode,
  LuTag,
  LuDatabase,
  LuBriefcase,
  LuCircleUser,
  LuImage,
  LuFileText,
  LuCalendarDays,
  LuShieldCheck,
  LuSmartphone,
  LuLayers,
  LuArrowRight,
  LuCheck,
  LuPackage,
  LuHeart,
  LuWrench,
} from "react-icons/lu"

function Navbar() {
  return (
    <Box
      as="nav"
      position="sticky"
      top="0"
      zIndex="sticky"
      bg="bg/95"
      backdropFilter="blur(8px)"
      borderBottom="1px solid"
      borderColor="border.muted"
    >
      <Container maxW="7xl">
        <Flex h="16" align="center" justify="space-between">
          <HStack gap="2">
            <Box
              w="8"
              h="8"
              bg="teal.500"
              rounded="lg"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Icon color="white" fontSize="md">
                <LuQrCode />
              </Icon>
            </Box>
            <Text fontWeight="bold" fontSize="xl" color="fg" letterSpacing="tight">
              Конта
            </Text>
          </HStack>

          <HStack gap="2" display={{ base: "none", md: "flex" }}>
            <Button variant="ghost" size="sm" colorPalette="gray">
              Возможности
            </Button>
            <Button variant="ghost" size="sm" colorPalette="gray">
              Применения
            </Button>
            <Button variant="ghost" size="sm" colorPalette="gray">
              Как работает
            </Button>
          </HStack>

          <HStack gap="3">
            <Button variant="ghost" size="sm" colorPalette="gray" display={{ base: "none", sm: "flex" }}>
              Войти
            </Button>
            <Button size="sm" colorPalette="teal">
              Начать бесплатно
            </Button>
          </HStack>
        </Flex>
      </Container>
    </Box>
  )
}

function Hero() {
  return (
    <Box as="section" pt={{ base: "16", md: "24" }} pb={{ base: "16", md: "20" }} overflow="hidden">
      <Container maxW="7xl">
        <Grid
          templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
          gap={{ base: "12", lg: "16" }}
          alignItems="center"
        >
          <VStack align="flex-start" gap="8">
            <VStack align="flex-start" gap="4">
              <Badge colorPalette="teal" variant="subtle" size="lg" px="3" py="1" rounded="full">
                Новый способ хранить информацию
              </Badge>
              <Heading
                as="h1"
                fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
                fontWeight="bold"
                lineHeight="shorter"
                color="fg"
                letterSpacing="tighter"
              >
                Каждый объект —{" "}
                <Box as="span" color="teal.500">
                  точка доступа
                </Box>{" "}
                к информации
              </Heading>
              <Text
                fontSize={{ base: "lg", md: "xl" }}
                color="fg.muted"
                lineHeight="tall"
                maxW="prose"
              >
                Конта связывает физический мир с вашими данными. Прикрепите QR-код к любому
                объекту и получайте мгновенный доступ ко всей нужной информации — истории,
                фото, событиям и документам.
              </Text>
            </VStack>

            <HStack gap="4" flexWrap="wrap">
              <Button size="lg" colorPalette="teal" px="8">
                Начать бесплатно <LuArrowRight />
              </Button>
              <Button size="lg" variant="outline" colorPalette="gray">
                Как это работает
              </Button>
            </HStack>

            <HStack gap="8" pt="2" flexWrap="wrap">
              <VStack align="flex-start" gap="0.5">
                <Text fontWeight="bold" fontSize="2xl" color="fg">
                  Бесплатно
                </Text>
                <Text fontSize="sm" color="fg.muted">
                  для старта
                </Text>
              </VStack>
              <Box h="10" w="1px" bg="border" />
              <VStack align="flex-start" gap="0.5">
                <Text fontWeight="bold" fontSize="2xl" color="fg">
                  QR-доступ
                </Text>
                <Text fontSize="sm" color="fg.muted">
                  без приложения
                </Text>
              </VStack>
              <Box h="10" w="1px" bg="border" />
              <VStack align="flex-start" gap="0.5">
                <Text fontWeight="bold" fontSize="2xl" color="fg">
                  Любой объект
                </Text>
                <Text fontSize="sm" color="fg.muted">
                  любые данные
                </Text>
              </VStack>
            </HStack>
          </VStack>

          <Box position="relative">
            <Box
              position="absolute"
              top="-20%"
              right="-10%"
              w="72"
              h="72"
              bg="teal.100"
              rounded="full"
              filter="blur(60px)"
              opacity="0.6"
              _dark={{ bg: "teal.900", opacity: "0.3" }}
            />
            <Image
              src="/hero-object-data.webp"
              alt="Конта — связь объекта с данными"
              rounded="2xl"
              shadow="xl"
              w="full"
              position="relative"
              zIndex="1"
            />
          </Box>
        </Grid>
      </Container>
    </Box>
  )
}

function HowItWorks() {
  const steps = [
    {
      number: "01",
      icon: LuTag,
      title: "Создайте объект",
      description:
        "Зарегистрируйтесь и добавьте объект в систему. Получите уникальный QR-код для печати или наклейки.",
    },
    {
      number: "02",
      icon: LuDatabase,
      title: "Добавьте данные",
      description:
        "Загружайте фотографии, текстовые заметки, документы и события. Всё хранится в одном месте.",
    },
    {
      number: "03",
      icon: LuScanQrCode,
      title: "Сканируйте и получайте",
      description:
        "Любой авторизованный пользователь может сканировать QR-код и мгновенно получить доступ к информации.",
    },
  ]

  return (
    <Box as="section" py={{ base: "16", md: "24" }} bg="bg.subtle">
      <Container maxW="7xl">
        <VStack gap="16">
          <VStack gap="4" textAlign="center">
            <Badge colorPalette="teal" variant="outline" rounded="full" px="3">
              Просто и понятно
            </Badge>
            <Heading
              fontSize={{ base: "3xl", md: "4xl" }}
              fontWeight="bold"
              color="fg"
              letterSpacing="tight"
            >
              Как работает Конта
            </Heading>
            <Text fontSize="lg" color="fg.muted" maxW="2xl">
              Три простых шага — и любой объект становится носителем информации
            </Text>
          </VStack>

          <Grid
            templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
            gap="8"
            w="full"
          >
            {steps.map((step, i) => (
              <Box key={i} position="relative">
                {i < steps.length - 1 && (
                  <Box
                    display={{ base: "none", md: "flex" }}
                    position="absolute"
                    top="10"
                    right="-20px"
                    w="40px"
                    zIndex="1"
                    color="border.emphasized"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Icon fontSize="2xl">
                      <LuArrowRight />
                    </Icon>
                  </Box>
                )}
                <Card.Root variant="outline" h="full" _hover={{ shadow: "md", borderColor: "teal.300" }} transition="all 0.2s">
                  <Card.Body gap="5" p="8">
                    <HStack justify="space-between" align="flex-start">
                      <Box
                        w="12"
                        h="12"
                        bg="teal.50"
                        rounded="xl"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        _dark={{ bg: "teal.900/30" }}
                      >
                        <Icon color="teal.500" fontSize="xl">
                          <step.icon />
                        </Icon>
                      </Box>
                      <Text
                        fontSize="4xl"
                        fontWeight="black"
                        color="border.emphasized"
                        lineHeight="1"
                        userSelect="none"
                      >
                        {step.number}
                      </Text>
                    </HStack>
                    <VStack align="flex-start" gap="2">
                      <Heading fontSize="xl" fontWeight="semibold" color="fg">
                        {step.title}
                      </Heading>
                      <Text fontSize="sm" color="fg.muted" lineHeight="tall">
                        {step.description}
                      </Text>
                    </VStack>
                  </Card.Body>
                </Card.Root>
              </Box>
            ))}
          </Grid>
        </VStack>
      </Container>
    </Box>
  )
}

function UseCases() {
  const cases = [
    {
      icon: LuCircleUser,
      color: "teal",
      title: "Паспорт каждой вещи",
      description:
        "Храните историю ремонтов, гарантийные документы, инструкции и фото для любого предмета в вашем доме.",
      items: [
        "Техника и электроника",
        "Автомобиль и запчасти",
        "Инструменты и оборудование",
        "Коллекции и хобби",
      ],
      badge: "Для себя",
    },
    {
      icon: LuHeart,
      color: "orange",
      title: "Живая память семьи",
      description:
        "Привяжите к семейным реликвиям фотографии, воспоминания и истории, чтобы передать их следующим поколениям.",
      items: [
        "Семейные реликвии и фото",
        "Детские вещи и игрушки",
        "Совместные путешествия",
        "Подарки и памятные предметы",
      ],
      badge: "Для семьи",
    },
    {
      icon: LuBriefcase,
      color: "blue",
      title: "Учёт и контроль активов",
      description:
        "Маркируйте оборудование, инвентарь и товары. Мгновенный доступ к документации и истории обслуживания.",
      items: [
        "Оборудование и инвентарь",
        "Товарные позиции",
        "Документация и сертификаты",
        "История обслуживания",
      ],
      badge: "Для бизнеса",
    },
  ]

  return (
    <Box as="section" py={{ base: "16", md: "24" }}>
      <Container maxW="7xl">
        <VStack gap="16">
          <VStack gap="4" textAlign="center">
            <Badge colorPalette="teal" variant="outline" rounded="full" px="3">
              Универсальное решение
            </Badge>
            <Heading
              fontSize={{ base: "3xl", md: "4xl" }}
              fontWeight="bold"
              color="fg"
              letterSpacing="tight"
            >
              Подходит для каждого
            </Heading>
            <Text fontSize="lg" color="fg.muted" maxW="2xl">
              Конта решает реальные задачи — для частных пользователей, семей и бизнеса
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 3 }} gap="6" w="full">
            {cases.map((item, i) => (
              <Card.Root
                key={i}
                variant="outline"
                overflow="hidden"
                _hover={{ shadow: "lg", transform: "translateY(-2px)" }}
                transition="all 0.25s"
              >
                <Box h="1.5" bg={`${item.color}.400`} />
                <Card.Body gap="6" p="8">
                  <HStack justify="space-between">
                    <Box
                      w="12"
                      h="12"
                      bg={`${item.color}.50`}
                      rounded="xl"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      _dark={{ bg: `${item.color}.900/30` }}
                    >
                      <Icon color={`${item.color}.500`} fontSize="xl">
                        <item.icon />
                      </Icon>
                    </Box>
                    <Badge colorPalette={item.color} variant="subtle" rounded="full">
                      {item.badge}
                    </Badge>
                  </HStack>

                  <VStack align="flex-start" gap="2">
                    <Heading fontSize="xl" fontWeight="semibold" color="fg">
                      {item.title}
                    </Heading>
                    <Text fontSize="sm" color="fg.muted" lineHeight="tall">
                      {item.description}
                    </Text>
                  </VStack>

                  <VStack align="flex-start" gap="2">
                    {item.items.map((point, j) => (
                      <HStack key={j} gap="2">
                        <Icon color={`${item.color}.500`} fontSize="sm" flexShrink="0">
                          <LuCheck />
                        </Icon>
                        <Text fontSize="sm" color="fg.muted">
                          {point}
                        </Text>
                      </HStack>
                    ))}
                  </VStack>
                </Card.Body>
              </Card.Root>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  )
}

function Features() {
  const features = [
    {
      icon: LuQrCode,
      title: "QR-доступ",
      description: "Сканируйте QR-код обычной камерой смартфона — без приложения и регистрации.",
    },
    {
      icon: LuImage,
      title: "Медиафайлы",
      description: "Фотографии, видео и документы прямо в карточке объекта.",
    },
    {
      icon: LuCalendarDays,
      title: "История событий",
      description: "Фиксируйте даты, ремонты, покупки и любые значимые события.",
    },
    {
      icon: LuShieldCheck,
      title: "Управление доступом",
      description: "Контролируйте, кто видит информацию — публичный или приватный доступ.",
    },
    {
      icon: LuSmartphone,
      title: "Личный кабинет",
      description: "Управляйте всеми объектами из одного места с любого устройства.",
    },
    {
      icon: LuLayers,
      title: "Без ограничений",
      description: "Добавляйте сколько угодно объектов и категорий данных.",
    },
    {
      icon: LuFileText,
      title: "Заметки и тексты",
      description: "Подробные текстовые описания, инструкции и произвольные записи.",
    },
    {
      icon: LuWrench,
      title: "Настройка полей",
      description: "Создавайте собственные поля под ваши задачи и сценарии.",
    },
  ]

  return (
    <Box as="section" py={{ base: "16", md: "24" }} bg="bg.subtle">
      <Container maxW="7xl">
        <VStack gap="16">
          <VStack gap="4" textAlign="center">
            <Badge colorPalette="teal" variant="outline" rounded="full" px="3">
              Всё что нужно
            </Badge>
            <Heading
              fontSize={{ base: "3xl", md: "4xl" }}
              fontWeight="bold"
              color="fg"
              letterSpacing="tight"
            >
              Возможности сервиса
            </Heading>
            <Text fontSize="lg" color="fg.muted" maxW="2xl">
              Конта создан чтобы связать любой физический объект с нужной информацией
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} gap="5" w="full">
            {features.map((feat, i) => (
              <Box
                key={i}
                p="6"
                bg="bg.panel"
                rounded="xl"
                border="1px solid"
                borderColor="border.muted"
                _hover={{ borderColor: "teal.300", shadow: "sm" }}
                transition="all 0.2s"
              >
                <VStack align="flex-start" gap="3">
                  <Box
                    w="10"
                    h="10"
                    bg="teal.50"
                    rounded="lg"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    _dark={{ bg: "teal.900/30" }}
                  >
                    <Icon color="teal.500" fontSize="lg">
                      <feat.icon />
                    </Icon>
                  </Box>
                  <Heading fontSize="md" fontWeight="semibold" color="fg">
                    {feat.title}
                  </Heading>
                  <Text fontSize="sm" color="fg.muted" lineHeight="tall">
                    {feat.description}
                  </Text>
                </VStack>
              </Box>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  )
}

function ScenarioShowcase() {
  return (
    <Box as="section" py={{ base: "16", md: "24" }}>
      <Container maxW="7xl">
        <Grid
          templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
          gap={{ base: "12", lg: "16" }}
          alignItems="center"
        >
          <Box>
            <Image
              src="/use-cases-illustration.webp"
              alt="Применения Конта"
              rounded="2xl"
              w="full"
              shadow="lg"
            />
          </Box>

          <VStack align="flex-start" gap="8">
            <VStack align="flex-start" gap="4">
              <Badge colorPalette="teal" variant="outline" rounded="full" px="3">
                Реальные сценарии
              </Badge>
              <Heading
                fontSize={{ base: "3xl", md: "4xl" }}
                fontWeight="bold"
                color="fg"
                letterSpacing="tight"
              >
                Один сервис — бесконечные применения
              </Heading>
              <Text fontSize="lg" color="fg.muted" lineHeight="tall">
                Конта работает везде, где есть физический объект и потребность в информации о нём.
              </Text>
            </VStack>

            <VStack align="flex-start" gap="4" w="full">
              {[
                {
                  icon: LuPackage,
                  title: "Техника и имущество",
                  desc: "QR-стикер на холодильнике — и вся история ремонтов в телефоне",
                },
                {
                  icon: LuHeart,
                  title: "Семейные ценности",
                  desc: "Бабушкина шкатулка рассказывает свою историю через QR-код",
                },
                {
                  icon: LuBriefcase,
                  title: "Корпоративные активы",
                  desc: "Каждый ноутбук или станок — с документами и историей обслуживания",
                },
              ].map((item, i) => (
                <HStack
                  key={i}
                  gap="4"
                  p="4"
                  w="full"
                  bg="bg.subtle"
                  rounded="xl"
                  border="1px solid"
                  borderColor="border.muted"
                  align="flex-start"
                >
                  <Box
                    w="10"
                    h="10"
                    bg="teal.50"
                    rounded="lg"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    flexShrink="0"
                    _dark={{ bg: "teal.900/30" }}
                  >
                    <Icon color="teal.500" fontSize="lg">
                      <item.icon />
                    </Icon>
                  </Box>
                  <VStack align="flex-start" gap="0.5">
                    <Text fontWeight="semibold" fontSize="sm" color="fg">
                      {item.title}
                    </Text>
                    <Text fontSize="sm" color="fg.muted">
                      {item.desc}
                    </Text>
                  </VStack>
                </HStack>
              ))}
            </VStack>
          </VStack>
        </Grid>
      </Container>
    </Box>
  )
}

function CTA() {
  return (
    <Box
      as="section"
      py={{ base: "16", md: "24" }}
      bg="teal.500"
      position="relative"
      overflow="hidden"
    >
      <Box
        position="absolute"
        top="-40%"
        left="-10%"
        w="80"
        h="80"
        bg="teal.400"
        rounded="full"
        filter="blur(80px)"
        opacity="0.5"
      />
      <Box
        position="absolute"
        bottom="-40%"
        right="-10%"
        w="80"
        h="80"
        bg="teal.600"
        rounded="full"
        filter="blur(80px)"
        opacity="0.5"
      />

      <Container maxW="4xl" position="relative" zIndex="1">
        <VStack gap="10" textAlign="center">
          <VStack gap="4">
            <Heading
              fontSize={{ base: "3xl", md: "5xl" }}
              fontWeight="bold"
              color="white"
              letterSpacing="tight"
            >
              Начните прямо сейчас
            </Heading>
            <Text
              fontSize={{ base: "md", md: "xl" }}
              color="teal.100"
              maxW="xl"
              lineHeight="tall"
            >
              Зарегистрируйтесь бесплатно и создайте первый объект уже сегодня
            </Text>
          </VStack>

          <Box
            w="full"
            maxW="md"
            bg="white/10"
            backdropFilter="blur(4px)"
            rounded="2xl"
            p="6"
            border="1px solid"
            borderColor="white/20"
          >
            <Stack gap="4">
              <Input
                placeholder="Ваш email"
                size="lg"
                bg="white"
                color="gray.800"
                border="none"
                _placeholder={{ color: "gray.400" }}
                rounded="xl"
              />
              <Input
                placeholder="Придумайте пароль"
                type="password"
                size="lg"
                bg="white"
                color="gray.800"
                border="none"
                _placeholder={{ color: "gray.400" }}
                rounded="xl"
              />
              <Button
                size="lg"
                bg="white"
                color="teal.600"
                fontWeight="bold"
                rounded="xl"
                _hover={{ bg: "teal.50" }}
                w="full"
              >
                Создать аккаунт бесплатно
              </Button>
              <Text fontSize="xs" color="teal.100" textAlign="center">
                Регистрируясь, вы соглашаетесь с условиями использования сервиса
              </Text>
            </Stack>
          </Box>

          <HStack gap="8" flexWrap="wrap" justify="center">
            {["Бесплатный старт", "Без кредитной карты", "Настройка за 2 минуты"].map((item, i) => (
              <HStack key={i} gap="2">
                <Icon color="teal.100" fontSize="sm">
                  <LuCheck />
                </Icon>
                <Text fontSize="sm" color="teal.100">
                  {item}
                </Text>
              </HStack>
            ))}
          </HStack>
        </VStack>
      </Container>
    </Box>
  )
}

function Footer() {
  return (
    <Box as="footer" py="12" bg="bg.subtle" borderTop="1px solid" borderColor="border.muted">
      <Container maxW="7xl">
        <Grid
          templateColumns={{ base: "1fr", md: "1fr 1fr 1fr 1fr" }}
          gap="8"
          pb="8"
        >
          <VStack align="flex-start" gap="4">
            <HStack gap="2">
              <Box
                w="8"
                h="8"
                bg="teal.500"
                rounded="lg"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Icon color="white" fontSize="md">
                  <LuQrCode />
                </Icon>
              </Box>
              <Text fontWeight="bold" fontSize="xl" color="fg">
                Конта
              </Text>
            </HStack>
            <Text fontSize="sm" color="fg.muted" lineHeight="tall">
              Сервис связывает физический объект и информацию о нём. Любой объект — точка
              доступа к данным.
            </Text>
          </VStack>

          <VStack align="flex-start" gap="3">
            <Text fontWeight="semibold" fontSize="sm" color="fg">
              Продукт
            </Text>
            {["Возможности", "Тарифы", "API", "Документация"].map((link) => (
              <Text
                key={link}
                fontSize="sm"
                color="fg.muted"
                cursor="pointer"
                _hover={{ color: "teal.500" }}
                transition="color 0.15s"
              >
                {link}
              </Text>
            ))}
          </VStack>

          <VStack align="flex-start" gap="3">
            <Text fontWeight="semibold" fontSize="sm" color="fg">
              Применения
            </Text>
            {["Личное использование", "Для семьи", "Для бизнеса", "Интеграции"].map((link) => (
              <Text
                key={link}
                fontSize="sm"
                color="fg.muted"
                cursor="pointer"
                _hover={{ color: "teal.500" }}
                transition="color 0.15s"
              >
                {link}
              </Text>
            ))}
          </VStack>

          <VStack align="flex-start" gap="3">
            <Text fontWeight="semibold" fontSize="sm" color="fg">
              Компания
            </Text>
            {["О нас", "Блог", "Контакты", "Политика конфиденциальности"].map((link) => (
              <Text
                key={link}
                fontSize="sm"
                color="fg.muted"
                cursor="pointer"
                _hover={{ color: "teal.500" }}
                transition="color 0.15s"
              >
                {link}
              </Text>
            ))}
          </VStack>
        </Grid>

        <Separator />

        <Flex pt="8" justify="space-between" align="center" flexWrap="wrap" gap="4">
          <Text fontSize="sm" color="fg.subtle">
            © 2026 Конта. Все права защищены.
          </Text>
          <Text fontSize="sm" color="fg.subtle">
            Объект + данные = Конта
          </Text>
        </Flex>
      </Container>
    </Box>
  )
}

function App() {
  return (
    <Box bg="bg" minH="100vh">
      <Navbar />
      <Hero />
      <HowItWorks />
      <UseCases />
      <Features />
      <ScenarioShowcase />
      <CTA />
      <Footer />
    </Box>
  )
}

export default App
