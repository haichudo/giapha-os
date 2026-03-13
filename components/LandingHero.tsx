<motion.div
  className="max-w-5xl text-center space-y-12 w-full relative z-10"
  initial="hidden"
  animate="visible"
  variants={staggerContainer}
>

  {/* Nền hoa văn gia phả */}
  <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
    <Network className="w-[600px] h-[600px] text-stone-700" />
  </div>

  <motion.div
    className="space-y-8 flex flex-col items-center relative z-10"
    variants={fadeIn}
  >
    {/* Badge */}
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-semibold text-amber-800 bg-white/70 rounded-full border border-amber-200 shadow-sm"
    >
      <Sparkles className="size-4 text-amber-500" />
      Nền tảng gia phả hiện đại & bảo mật
    </motion.div>

    {/* Tiêu đề gia phả */}
    <h1 className="flex flex-col items-center text-center leading-tight">

      {/* Biểu tượng họ tộc */}
      <Users className="mb-4 text-emerald-700 w-12 h-12" />

      {/* Tên gia phả */}
      <span className="
        text-5xl
        sm:text-6xl
        md:text-7xl
        lg:text-[5rem]
        font-serif
        font-bold
        tracking-wide
        bg-gradient-to-r
        from-emerald-700
        via-teal-600
        to-cyan-700
        bg-clip-text
        text-transparent
      ">
        {siteName}
      </span>

      {/* Địa danh */}
      <span className="mt-4 text-lg sm:text-xl md:text-2xl text-stone-600 font-medium max-w-3xl">
        Thôn Khúc Lộng – Xã Nghĩa Trụ – Tỉnh Hưng Yên
      </span>

      <span className="text-lg sm:text-xl md:text-2xl text-stone-500 font-medium max-w-3xl">
        (Xưa là Xóm Đọ – Thôn Vĩnh Khúc – Mỹ Văn – Văn Giang)
      </span>

    </h1>

    {/* Mô tả */}
    <p className="text-lg sm:text-xl md:text-2xl text-stone-600 max-w-2xl mx-auto leading-relaxed font-light">
      Gìn giữ và lưu truyền những giá trị, cội nguồn và truyền thống tốt
      đẹp của dòng họ cho các thế hệ mai sau.
    </p>
  </motion.div>
</motion.div>
